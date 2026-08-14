import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glam & Go Academy | London's Leading Beauty & Hair Academy",
  description: "Train with London's leading beauty and hair academy. Professional, hands-on cosmetic, hair, and beauty training courses. Enquire now and start your career.",
  keywords: ["beauty academy london", "hair training london", "makeup course london", "beauty therapy school", "glam & go academy"],
  authors: [{ name: "Glam & Go Academy" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text font-sans selection:bg-accent selection:text-bg">
        {children}
      </body>
    </html>
  );
}
