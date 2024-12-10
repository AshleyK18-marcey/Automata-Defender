import type { Metadata } from "next";
import localFont from "next/font/local";
import "../app/CSS/globals.css";

export const metadata: Metadata = {
  title: "Automata Defender",
  description: "AD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
