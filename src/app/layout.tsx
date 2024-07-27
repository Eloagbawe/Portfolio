import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "@/contexts/themeContext";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elo Idiodi",
  description: "Elo Idiodi's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
