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
  openGraph: {
    title: "Verge-One",
    type: "website",
    emails: "info@verge-one.com",
    phoneNumbers: "0176 83419242",
    countryName: "Germany",
    description: "Offizielle Webseite der Firma Verge-One",
    siteName: "Verge-One",
  },
  keywords: [
    "Software Unternehmen",
    "Software Firmen",
    "Softwareentwicklung",
    "IT Dienstleister",
    "Digitalisierung für Unternehmen",
    "Automatisierung von Geschäftsprozessen",
    "Web Dienstleister",
    "Individuelle Softwarelösungen",
    "Internet Dienstleister",
    "Webentwicklung für Unternehmen",
    "IT-Lösungen für KMU",
    "Softwareentwicklung Outsourcing",
    "Softwareentwicklung Haßfurt",
    "VergeOne",
    "Verge-One",
    "Verge One",
    "Software Automation",
    "Automationen",
    "Datenbanken",
    "Web Dienstleistungen",
  ],
  publisher: "Verge-One",
  description:
    "Ihr Partner für Web-Dienstleistungen, die ihr Unternehmen herausstechen lassen. Maßgeschneiderte Applikationen, Automationen und Datenbankanbindungen, die Ihnen nicht nur Zeit und Geld sparen, sondern den Stress aus ihrem Alltag nehmen. ",
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
