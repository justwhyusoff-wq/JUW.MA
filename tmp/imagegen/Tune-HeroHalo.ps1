param([Parameter(Mandatory=$true)][string]$Path)
Add-Type -AssemblyName System.Drawing
Add-Type -ReferencedAssemblies System.Drawing.dll -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class TuneHeroHalo {
  public static void Process(string path) {
    using (var bmp = new Bitmap(path)) {
      var rect = new Rectangle(0, 0, bmp.Width, bmp.Height);
      var data = bmp.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
      int stride = data.Stride;
      int bytes = Math.Abs(stride) * bmp.Height;
      byte[] p = new byte[bytes];
      Marshal.Copy(data.Scan0, p, 0, bytes);
      for (int y = 0; y < bmp.Height; y++) {
        int row = y * stride;
        for (int x = 0; x < bmp.Width; x++) {
          int i = row + x * 4;
          int a = p[i + 3];
          if (a > 0 && a < 235) {
            double t = a / 235.0;
            int na = (int)Math.Round(Math.Pow(a / 255.0, 1.35) * 170.0);
            if (a < 8) na = 0;
            int r = (int)Math.Round(99 + (79 - 99) * t);
            int g = (int)Math.Round(102 + (70 - 102) * t);
            int b = (int)Math.Round(241 + (229 - 241) * t);
            p[i] = (byte)b;
            p[i + 1] = (byte)g;
            p[i + 2] = (byte)r;
            p[i + 3] = (byte)Math.Max(0, Math.Min(255, na));
          }
        }
      }
      Marshal.Copy(p, 0, data.Scan0, bytes);
      bmp.UnlockBits(data);
      string tmp = path + ".tmp.png"; bmp.Save(tmp, ImageFormat.Png); bmp.Dispose(); System.IO.File.Copy(tmp, path, true); System.IO.File.Delete(tmp); return;
    }
  }
}
"@
[TuneHeroHalo]::Process((Resolve-Path $Path))
