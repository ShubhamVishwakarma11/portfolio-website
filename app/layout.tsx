import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "shubhamvish",
  description: "shubhamvish portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dxluppmld/image/upload/v1725923119/ob37vghci27jnh4ehz2j.jpg"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dxluppmld/image/upload/v1725923119/ob37vghci27jnh4ehz2j.jpg"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
