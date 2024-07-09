import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verge-One",
  description:
    "Ihr Partner für Web-Dienstleistungen, die ihr Unternehmen herausstechen lassen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className + " bg-brand-dark w-full"}>
        <div className="z-10 w-full bg-noise0 bg-repeat">{children}</div>
      </body>
    </html>
  );
}
