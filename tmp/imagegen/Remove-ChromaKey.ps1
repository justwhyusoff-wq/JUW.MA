param(
  [Parameter(Mandatory=$true)][string]$InputPath,
  [Parameter(Mandatory=$true)][string]$OutputPath,
  [int]$Width = 0,
  [int]$Height = 0,
  [double]$TransparentThreshold = 12,
  [double]$OpaqueThreshold = 220
)

Add-Type -AssemblyName System.Drawing
Add-Type -ReferencedAssemblies System.Drawing.dll -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class ChromaKeyPng {
  public static void Process(string input, string output, int outW, int outH, double transparentThreshold, double opaqueThreshold) {
    using (var loaded = (Bitmap)Image.FromFile(input))
    using (var src = new Bitmap(loaded.Width, loaded.Height, PixelFormat.Format32bppArgb)) {
      using (var g = Graphics.FromImage(src)) {
        g.CompositingMode = CompositingMode.SourceCopy;
        g.DrawImage(loaded, 0, 0, loaded.Width, loaded.Height);
      }

      Color key = SampleBorder(src);
      Rectangle rect = new Rectangle(0, 0, src.Width, src.Height);
      BitmapData data = src.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
      int stride = data.Stride;
      int bytes = Math.Abs(stride) * src.Height;
      byte[] pixels = new byte[bytes];
      Marshal.Copy(data.Scan0, pixels, 0, bytes);

      bool keyIsGreen = key.G > key.R + 50 && key.G > key.B + 50;
      bool keyIsMagenta = key.R > 180 && key.B > 180 && key.G < 100;

      for (int y = 0; y < src.Height; y++) {
        int row = y * stride;
        for (int x = 0; x < src.Width; x++) {
          int i = row + x * 4;
          double b = pixels[i];
          double g = pixels[i + 1];
          double r = pixels[i + 2];
          double dR = r - key.R;
          double dG = g - key.G;
          double dB = b - key.B;
          double dist = Math.Sqrt(dR * dR + dG * dG + dB * dB);

          double alpha;
          if (dist <= transparentThreshold) alpha = 0;
          else if (dist >= opaqueThreshold) alpha = 255;
          else {
            double t = (dist - transparentThreshold) / (opaqueThreshold - transparentThreshold);
            t = t * t * (3 - 2 * t);
            alpha = t * 255;
          }

          if (alpha <= 1) {
            pixels[i] = 0; pixels[i + 1] = 0; pixels[i + 2] = 0; pixels[i + 3] = 0;
            continue;
          }

          if (alpha < 254) {
            double a = alpha / 255.0;
            r = Clamp((r - (1 - a) * key.R) / a);
            g = Clamp((g - (1 - a) * key.G) / a);
            b = Clamp((b - (1 - a) * key.B) / a);

            if (keyIsGreen && g > Math.Max(r, b)) g = Math.Max(r, b);
            if (keyIsMagenta && r > g + 30 && b > g + 30) {
              double neutral = Math.Max(g, Math.Min(r, b) - 20);
              r = Math.Min(r, neutral + 45);
              b = Math.Min(b, neutral + 45);
            }
          }

          pixels[i] = (byte)Clamp(b);
          pixels[i + 1] = (byte)Clamp(g);
          pixels[i + 2] = (byte)Clamp(r);
          pixels[i + 3] = (byte)Math.Round(alpha);
        }
      }

      Marshal.Copy(pixels, 0, data.Scan0, bytes);
      src.UnlockBits(data);

      string dir = System.IO.Path.GetDirectoryName(output);
      if (!String.IsNullOrEmpty(dir)) System.IO.Directory.CreateDirectory(dir);

      if (outW > 0 && outH > 0 && (outW != src.Width || outH != src.Height)) {
        using (var resized = new Bitmap(outW, outH, PixelFormat.Format32bppArgb)) {
          using (var g = Graphics.FromImage(resized)) {
            g.CompositingMode = CompositingMode.SourceCopy;
            g.CompositingQuality = CompositingQuality.HighQuality;
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.SmoothingMode = SmoothingMode.HighQuality;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;
            g.DrawImage(src, new Rectangle(0, 0, outW, outH), new Rectangle(0, 0, src.Width, src.Height), GraphicsUnit.Pixel);
          }
          resized.Save(output, ImageFormat.Png);
        }
      } else {
        src.Save(output, ImageFormat.Png);
      }
    }
  }

  private static Color SampleBorder(Bitmap bmp) {
    long r = 0, g = 0, b = 0, n = 0;
    int step = Math.Max(1, Math.Min(bmp.Width, bmp.Height) / 200);
    for (int x = 0; x < bmp.Width; x += step) { Add(bmp.GetPixel(x, 0), ref r, ref g, ref b, ref n); Add(bmp.GetPixel(x, bmp.Height - 1), ref r, ref g, ref b, ref n); }
    for (int y = 0; y < bmp.Height; y += step) { Add(bmp.GetPixel(0, y), ref r, ref g, ref b, ref n); Add(bmp.GetPixel(bmp.Width - 1, y), ref r, ref g, ref b, ref n); }
    return Color.FromArgb((int)(r / n), (int)(g / n), (int)(b / n));
  }

  private static void Add(Color c, ref long r, ref long g, ref long b, ref long n) { r += c.R; g += c.G; b += c.B; n++; }
  private static double Clamp(double v) { return v < 0 ? 0 : (v > 255 ? 255 : v); }
}
"@

[ChromaKeyPng]::Process((Resolve-Path $InputPath), (Join-Path (Get-Location) $OutputPath), $Width, $Height, $TransparentThreshold, $OpaqueThreshold)
