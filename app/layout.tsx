import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verge-One",
  description:
    "Ihr Partner für Web-Dienstleistungen, die ihr Unternehmen herausstechen lassen. Maßgeschneiderte Applikationen, Automationen und Datenbankanbindungen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={
          inter.className +
          " overflow-x-hidden relative text-white bg-brand-dark w-full"
        }
      >
        <div className="z-30 w-full absolute top-0 left-0 h-full pointer-events-none opacity-60 bg-[url('/noise-transparent.png')] bg-repeat" />
        {children}
      </body>
    </html>
  );
}
