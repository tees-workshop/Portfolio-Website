import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tehilah Okhiria — Developer & Creative Technologist",
  description:
    "The portfolio of Tehilah Okhiria: software development, thoughtful digital experiences, and projects built with curiosity.",
  metadataBase: new URL("https://portfolio-website-seven-blond-50.vercel.app"),
  openGraph: {
    title: "Tehilah Okhiria — Developer & Creative Technologist",
    description: "A selection of projects, experience, and things I'm learning.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
