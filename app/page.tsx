"use client";

import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";

const monte = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: ["200"] });

export default function Home() {
  const [cust, setcust] = useState(false);
  const [auto, setauto] = useState(false);
  const [db, setdb] = useState(false);
  const [allg, setallg] = useState(false);
  const [bera, setbera] = useState(false);
  [];
  const [mailsucc, setMailsucc] = useState(false);
  const [mailfailed, setMailfailed] = useState(false);
  const scrolltoAnchor = (id: string) => {
    try {
      const y =
        document!.getElementById(id)!.getBoundingClientRect().top +
        window.scrollY;
      window.scroll({
        top: y,
        behavior: "smooth",
      });
    } catch (e) {}
  };

  async function sendMail() {
    let res = await fetch("/api/sendMail", {
      method: "Post",
      body: JSON.stringify({
        cust: cust,
        auto: auto,
        db: db,
        allg: allg,
        bera: bera,
      }),
    });
    if (res.ok) {
      setMailsucc(true);
      setMailfailed(false);
    } else {
      setMailfailed(true);
      setMailsucc(false);
    }
  }
  return (
    <>
      {/* Start First Page Wrapper */}
      <div id="Home" className="w-full h-[100vh] relative">
        <Header scrolltoAnchor={scrolltoAnchor} />
        {/* Start Hero Wrapper */}
        <div className="h-[84vh] w-full">
          {/* Start Hero Content Wrapper */}
          <div className="absolute animate-fade  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] flex flex-col gap-6 items-center">
            <h1
              className={
                monte.className +
                " select-none tracking-[0.3em] text-[68px] text-center"
              }
            >
              Verge-One
            </h1>
            <h3 className="w-full text-center text-2xl tracking-[0.27em]">
              Ihr Partner für Web-Dienstleistungen,
              <br />
              die das Beste aus ihrem Unternehmen herausholen.
            </h3>
            <button
              onClick={() => {
                scrolltoAnchor("Kontakt");
              }}
              className="border-solid rounded-full border-[1px] border-white tracking-[0.25em] text-xl font-normal py-2 px-9"
            >
              Kontakt
            </button>
            <Image
              className="select-none drag absolute top-1/2 left-1/2 -translate-x-1/2 blur-[100px] -translate-y-1/2 -z-10"
              src="/hero_high.svg"
              alt="Blob"
              width={1200}
              height={800}
            />
          </div>
          {/* End Hero Content Wrapper */}
        </div>
        {/* End Hero Wrapper */}
      </div>
      {/* End First Page Wrapper */}
      {/* Start Intro Wrapper */}
      <div className="h-[70vh] flex items-center justify-center">
        {/* Start Intro Content Wrapper */}
        <div className="flex flex-col gap-8 items-center justify-center">
          <h2
            className={
              monte.className +
              " text-animate text-[60px] font-medium tracking-[0.25em]"
            }
          >
            Wer sind wir?
          </h2>
          <p className="text-animate text-center text-2xl leading-10 tracking-[0.27em] w-[70%]">
            Wir bei Verge-One haben es uns zur Mission gemacht, den Einstieg in
            die digitale Welt für Unternehmen so einfach wie möglich zu
            gestalten.
            <br /> <br />
            Und das ohne Risiko.
          </p>
        </div>
        {/* End Intro Content Wrapper */}
      </div>
      {/* End Intro Wrapper */}
      {/* Start Scroll-animation Wrapper */}
      <div className="h-[100vh] relative">
        <Image
          className="animate-blob-trans [animation-timeline:view()] blur-[200px] select-none drag absolute translate-x-1/2 translate-y-1/2 bottom-0 right-0 -z-10"
          src="/hero_high.svg"
          alt="Blob"
          width={3500}
          height={2500}
        />
      </div>
      {/* End Scroll-animation Wrapper */}
      {/* Start Mission Wrapper */}
      <div className="h-[60vh] flex items-center justify-center">
        {/* Start Mission Content Wrapper */}
        <div className="flex flex-col gap-8 items-center justify-center">
          <h2
            className={
              monte.className +
              " text-animate text-[60px] font-medium tracking-[0.25em]"
            }
          >
            Unsere Mission
          </h2>
          <p className="text-animate text-center text-2xl leading-10 tracking-[0.20em] w-[70%]">
            Wir wissen wie wertvoll Ihre Zeit ist. Daher geben wir unser Bestes
            Ihnen davon so viel wie möglich einzusparen.
            <br />
            <br />
            Wir bieten Ihnen maßgeschneiderte Anwendungen nach ihren Belieben.
            Kein Kaufen und Ärgern über fehlende Funktionen mehr.
            <br />
            <br />
            Sagen Sie uns einfach was Sie brauchen und wir setzten es um.
          </p>
        </div>
        {/* End Mission Content Wrapper */}
      </div>
      {/* End Mission Wrapper */}
      {/* Start Customer Wrapper */}
      {/*
      <div className="h-[50vh]"></div>
      */}
      {/* End Customer Wrapper */}
      {/* Start Offer Wrapper */}
      <div className="h-[50vh] text-animate px-24 flex items-center justify-between w-full gap-8 mt-24">
        <div id="Preise" className="offer">
          <h1>Automationen</h1>
          <div>
            <p>- Zuverlässig</p>
            <p>- Mail-Automationen</p>
            <p>- Elimination repetitiver Aufgaben</p>
          </div>
          <h2>
            <span>ab </span> 245€
          </h2>
        </div>
        <div id="offer-mid" className="offer">
          <h1>Custom-Solutions</h1>
          <div>
            <p>- maßgeschneiderte Web-anwendungen</p>
            <p>- </p>
            <p>- Elimination repetitiver Aufgaben</p>
          </div>
          <h2>
            <span>ab </span> 995€
          </h2>
        </div>
        <div className="offer">
          <h1>Datenbanken</h1>
          <div>
            <p>- Einfache Verwaltung</p>
            <p>- Sicheres Daten-Management</p>
            <p>- Schnell und Speichereffizient</p>
          </div>
          <h2>
            <span>ab </span> 495€
          </h2>
        </div>
      </div>
      <div className="h-[40vh] flex items-center justify-center">
        <button
          onClick={() => {
            scrolltoAnchor("Kontakt");
          }}
          className="border-solid text-animate-less rounded-full border-2 border-white tracking-[0.25em] text-2xl font-normal py-3 px-12"
        >
          Kontakt
        </button>
      </div>
      {/* End Offer Wrapper */}
      {/* Start Form Wrapper */}
      <div id="Kontakt" className={inter.className + " form"}>
        <div>
          <p>Vor-, Nachname</p>
          <input type="text" />
        </div>
        <div>
          <p className=" font">Email</p>
          <input type="email" />
        </div>
        <div>
          <p>Ich bin interessiert an...</p>
          <div id="options" className="grid gap-4 grid-cols-3 *:grow   mt-2">
            <button
              onClick={() => {
                setcust(!cust);
              }}
              className={
                cust
                  ? "offer-enabled"
                  : "" +
                    " py-2 px-8 text-lg rounded-full border-2 border-solid border-gray-300/60"
              }
            >
              Custom-Anwendung
            </button>
            <button
              onClick={() => {
                setauto(!auto);
              }}
              className={
                auto
                  ? "offer-enabled"
                  : "" +
                    " py-2 px-8 text-lg rounded-full border-2 border-solid border-gray-300/60"
              }
            >
              Automationen
            </button>
            <button
              onClick={() => {
                setdb(!db);
              }}
              className={
                db
                  ? "offer-enabled"
                  : "" +
                    " py-2 px-8 text-lg rounded-full border-2 border-solid border-gray-300/60"
              }
            >
              Datenbankanbindung
            </button>
            <button
              onClick={() => {
                setbera(!bera);
              }}
              className={
                bera
                  ? "offer-enabled"
                  : "" +
                    " py-2 px-8 text-lg rounded-full border-2 border-solid border-gray-300/60"
              }
            >
              Beratungsgespräch
            </button>
            <button
              onClick={() => {
                setallg(!allg);
              }}
              className={
                allg
                  ? "offer-enabled"
                  : "" +
                    " py-2 px-8 text-lg rounded-full border-2 border-solid border-gray-300/60"
              }
            >
              Allgemein
            </button>
          </div>
        </div>
        <div>
          <p>Nachricht</p>
          <textarea cols={20} rows={45} />
        </div>
        <button onClick={() => sendMail()}>
          Senden{" "}
          <Image alt="send icon" src="/send.svg" width={32} height={32} />
        </button>
      </div>
      {/* End Form Wrapper */}
      <Footer scrolltoAnchor={scrolltoAnchor} />
    </>
  );
}
