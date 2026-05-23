import '../styles/globals.css';

export const metadata = {
  metadataBase: new URL('https://justwhyus.ma'),
  title: {
    default: 'justwhyus — Digital systems for real businesses',
    template: '%s · justwhyus',
  },
  description:
    "We build tailored digital systems for restaurants, car rentals, travel agencies, real estate and beyond — built for Morocco.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-[#0f1710] font-body antialiased">{children}</body>
    </html>
  );
}
