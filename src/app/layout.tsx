import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import BottomTabBar from "@/components/BottomTabBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glam and Go London | Professional Beauty Academy",
  description: "Train with Glam and Go London. Professional, hands-on cosmetic, hair, and beauty training courses. Enquire now and start your career.",
  authors: [{ name: "Glam and Go London" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flash theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text font-body selection:bg-accent selection:text-bg">
        {children}
        <CustomCursor />
        <BottomTabBar />
      </body>
    </html>
  );
}
