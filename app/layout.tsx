import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "1",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Verge-One",
  applicationName: "Verge-One",
  creator: "Verge-One",
  robots: "index, follow",
  openGraph: {
    title: "Verge-One | Maßgeschneiderte Web-Dienstleistungen",
    type: "website",
    countryName: "Germany",
    description:
      "Innovative Web-Lösungen für Ihr Unternehmen – Automatisierungen, Datenbanken und mehr.",
    siteName: "Verge-One",
    url: "https://verge-one.com",
  },
  keywords: [
    "VergeOne",
    "Verge-One",
    "Verge One",
    "Custom Apps",
    "Maßgeschneiderte Webanwendungen",
    "Automatisierungslösungen",
    "Datenbankintegration",
    "Web-App-Entwicklung",
    "IT Dienstleister",
    "Next.js Entwicklung",
    "Softwareentwicklung",
    "Internetdienstleister",
    "Webentwicklung",
  ],

  publisher: "Verge-One",
  description:
    "Verge-One ist Ihr Partner für innovative Web-Dienstleistungen und individuelle Softwarelösungen. Wir entwickeln maßgeschneiderte Applikationen, Automatisierungen und Datenbankanbindungen, die Prozesse effizienter gestalten und Ihnen Zeit und Kosten sparen. Entdecken Sie Webentwicklung mit modernsten Technologien – maßgeschneidert für Ihr Unternehmen.",
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
