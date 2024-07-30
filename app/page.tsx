"use client";

import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";
import clsx from "clsx";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const monte = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: ["300"] });
const emailregex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Home() {
  const [formname, setformname] = useState("");
  const [formemail, setformemail] = useState("");
  const [formmessage, setformmessage] = useState("");
  const [cust, setcust] = useState(false);
  const [auto, setauto] = useState(false);
  const [db, setdb] = useState(false);
  const [allg, setallg] = useState(false);
  const [bera, setbera] = useState(false);
  const [missing, setmissing] = useState(false);
  const [mailsucc, setMailsucc] = useState(false);
  const [mailpending, setMailpending] = useState(false);
  const [mailfailed, setMailfailed] = useState(false);
  const scrolltoAnchor = (id: string) => {
    try {
      const y =
        document!.getElementById(id)!.getBoundingClientRect().top +
        window.scrollY;
      window.scroll({
        top: y - 150,
        behavior: "smooth",
      });
    } catch (e) {}
  };
  function check_correct(
    elem: any,
    name: string,
    type: "text" | "email" | "options",
  ) {
    let correct = true;
    if (type === "email") if (!emailregex.test(elem)) correct = false;
    if (type === "options") {
      let foundone = false;
      for (let i = 0; i < elem.length; i++) {
        if (elem[i]) {
          foundone = true;
          break;
        }
      }
      correct = foundone;
    } else if (elem == "" || elem.length == 0) correct = false;
    document.getElementById(name)!.style.border = correct
      ? "rgb(229 231 235)"
      : "2px solid red";
    return correct;
  }
  async function sendMail() {
    check_correct(formname, "formname", "text");
    check_correct(formemail, "formemail", "email");
    check_correct([cust, auto, db, allg, bera], "formoptions", "options");
    if (
      !(
        check_correct(formname, "formname", "text") &&
        check_correct(formemail, "formemail", "email") &&
        check_correct([cust, auto, db, allg, bera], "formoptions", "options")
      )
    ) {
      setmissing(true);
      return;
    }
    setmissing(false);
    setMailpending(true);
    let res = await fetch("/api/sendMail", {
      method: "Post",
      body: JSON.stringify({
        name: formname,
        email: formemail,
        options: [
          { name: "Custom-Solution", value: cust },
          { name: "Automation", value: auto },
          { name: "Datenbank", value: db },
          { name: "Allgemein", value: allg },
          { name: "Beratung", value: bera },
        ],
        message: formmessage,
      }),
    });
    if (res.ok) {
      setMailsucc(true);
      setMailfailed(false);
    } else {
      setMailfailed(true);
      setMailsucc(false);
    }
    setMailpending(false);
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
              className="border-solid rounded-full border-[2px] mt-2 border-white tracking-[0.25em] text-xl font-normal py-2 px-9"
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
          <p className="text-animate text-center text-2xl mt-5 leading-[2.75rem] tracking-[0.18em] w-[70%]">
            Bei Verge-One spezialisieren wir uns auf die Automatisierung
            repetitiver Aufgaben, um Ihrem Unternehmen Zeit und Geld zu sparen.
            Durch maßgeschneiderte Anwendungen und Datenbankintegration sorgen
            wir dafür, dass Ihre Abläufe effizienter und kostengünstiger werden.
            Unsere Lösungen senken nicht nur die Kosten, sondern eliminieren
            auch Fehler, die durch manuelle Handhabung entstehen.
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
      <div className="flex items-center justify-center flex-col">
        <h2
          className={
            monte.className +
            " text-animate text-center mt-[40vh] text-[60px] font-medium tracking-[0.25em]"
          }
        >
          Unsere Preise
        </h2>
        <p className="text-animate text-center text-2xl mt-5 leading-[2.75rem] tracking-[0.18em] w-[70%]">
          Um transparent mit Ihnen zu bleiben finden sie hier unsere Preise.
          <br />
          Diese sind Richtwerte.
          <br /> Für eine genauere Preisabschätzung, kontaktieren Sie uns oder
          vereinbaren Sie ein kostenloses Beratungsgespräch
        </p>
      </div>
      {/* Start Offers */}
      <div
        id="Preise"
        className="h-[50vh] text-animate-less px-24 flex items-center justify-between w-full gap-8 mt-24"
      >
        <div className="offer">
          <h1>Automationen</h1>
          <div>
            <p>- Zuverlässig</p>
            <p>- Mail-Automationen</p>
            <p>- Elimination repetitiver Aufgaben</p>
          </div>
          <h2>
            <span>ab </span> 1.495€
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
            <span>ab </span> 2.495€
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
            <span>ab </span> 1.895€
          </h2>
        </div>
      </div>
      <div className="flex py-24 items-center justify-center">
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
          <input
            id="formname"
            type="text"
            onChange={(e) => {
              setformname(e.target.value);
            }}
          />
        </div>
        <div>
          <p className=" font">Email</p>
          <input
            id="formemail"
            type="email"
            onChange={(e) => {
              setformemail(e.target.value);
            }}
          />
        </div>
        <div>
          <p>Ich bin interessiert an...</p>
          <div
            id="formoptions"
            className="grid gap-4 grid-cols-3 *:grow rounded-2xl p-3 mt-2"
          >
            <button
              onClick={() => {
                setcust(!cust);
              }}
              className={cust ? "option-enabled" : "option-disabled"}
            >
              Custom-Anwendung
            </button>
            <button
              onClick={() => {
                setauto(!auto);
              }}
              className={auto ? "option-enabled" : "option-disabled"}
            >
              Automationen
            </button>
            <button
              onClick={() => {
                setdb(!db);
              }}
              className={db ? "option-enabled" : "option-disabled"}
            >
              Datenbankanbindung
            </button>
            <button
              onClick={() => {
                setbera(!bera);
              }}
              className={bera ? "option-enabled" : "option-disabled"}
            >
              Beratungsgespräch
            </button>
            <button
              onClick={() => {
                setallg(!allg);
              }}
              className={allg ? "option-enabled" : "option-disabled"}
            >
              Allgemein
            </button>
          </div>
        </div>
        <div>
          <p>Nachricht</p>
          <textarea
            cols={20}
            rows={45}
            onChange={(e) => {
              setformmessage(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            if (!mailfailed && !mailsucc) sendMail();
          }}
          className={
            "flex items-center z-10 gap-2 border-solid rounded-full border-2 border-white tracking-[0.2em] text-xl font-normal py-2 " +
            (mailsucc || mailpending ? " px-14" : " px-9")
          }
        >
          {mailsucc ? (
            <FaCheckCircle className="w-7 h-7" width={28} height={28} />
          ) : !mailpending ? (
            !mailfailed ? (
              <>
                Senden <FaPaperPlane />
              </>
            ) : (
              <CgClose className="w-7 h-7" width={28} height={28} />
            )
          ) : (
            <div className="spinner" />
          )}
        </button>
        {mailsucc ? (
          <div className="bg-green-300/50 flex justify-center items-center rounded-xl w-1/2 h-14 ">
            Nachricht erfolgreich versendet!
          </div>
        ) : (
          <></>
        )}
        {mailfailed ? (
          <div className="bg-red-300/50 flex justify-center items-center rounded-xl w-1/2 h-14 ">
            Senden fehlgeschlagen! Versuche es bitte später erneut.
          </div>
        ) : (
          <></>
        )}
        {missing ? (
          <div className="bg-orange-300/50 flex justify-center items-center rounded-xl w-1/2 h-14 ">
            Bitte alle Felder ausfüllen!
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* End Form Wrapper */}
      <Footer inter={inter} scrolltoAnchor={scrolltoAnchor} />
    </>
  );
}
