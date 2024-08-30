"use client";

import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
const _ = require("lodash");
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power2 } from "gsap";
import Logo from "@/components/logo";
gsap.registerPlugin(ScrollTrigger);
const monte = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: ["300"] });

const emailregex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

type usageJsonArr = Array<{ id: string; value: number }>;

export default function Home() {
  //
  //
  // ############################# STATE MANAGEMENT #############################
  // ############################# STATE MANAGEMENT #############################
  const [formname, setformname] = useState("");
  const [formemail, setformemail] = useState("");
  const [formmessage, setformmessage] = useState("");
  const startTime = new Date();
  const [options, setOptions] = useState({
    cust: false,
    auto: false,
    db: false,
    allg: false,
    bera: false,
  });
  const [missing, setmissing] = useState(false);
  const [mailsucc, setMailsucc] = useState(false);
  const [mailpending, setMailpending] = useState(false);
  const [mailfailed, setMailfailed] = useState(false);
  const [scrollPosMax, setScrollPosMax] = useState(0);
  const [usage_json, setUsage_json] = useState<usageJsonArr>([
    { id: "visit", value: 1 },
  ]);
  // ############################# STATE MANAGEMENT #############################
  // ############################# STATE MANAGEMENT #############################
  //
  //
  //
  // ############################# USAGE MANAGEMENT #############################
  // ############################# USAGE MANAGEMENT #############################
  useEffect(() => {
    const handleBeforeUnload = () => {
      const url = "/api/saveUsage";
      const timeSpentInS = (new Date().getTime() - startTime.getTime()) / 1000;
      addUsage("timeSpentInSek", timeSpentInS);
      addUsage("distanceScrolled", scrollPosMax);
      // Fallback for older browsers
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usage_json),
        keepalive: true, // This is important for fetch on unload
      });
    };
    const handleScroll = () => {
      if (window.scrollY > scrollPosMax) {
        setScrollPosMax(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Add the event listener
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // ############################# USAGE MANAGEMENT #############################
  // ############################# USAGE MANAGEMENT #############################
  //
  //
  //
  //
  /// ############################# CONTAINER HOVER EFFECT #############################
  /// ############################# CONTAINER HOVER EFFECT #############################
  useEffect(() => {
    const rects = document.querySelectorAll(".anim_cont_grad");

    for (let rect of rects) {
      rect = rect as HTMLElement;
      const element: HTMLElement = rect as HTMLElement;
      const blob = element.querySelector(".blob_to_move") as HTMLElement;

      element.addEventListener("mousemove", (evt) => {
        // Get the current bounds of the container
        const rectBounds = element.getBoundingClientRect();

        // Calculate relative positions
        const relativeX = evt.clientX - rectBounds.left;
        const relativeY = evt.clientY - rectBounds.top;

        // Check if the mouse is inside the container's bounds
        if (
          relativeX >= 0 &&
          relativeX <= rectBounds.width &&
          relativeY >= 0 &&
          relativeY <= rectBounds.height
        ) {
          blob.style.opacity = "1";
          blob.style.left = `${relativeX}px`;
          blob.style.top = `${relativeY}px`;
        } else {
          blob.style.opacity = "0";
        }
      });

      // Ensure the blob is hidden when the mouse leaves the container
      element.addEventListener("mouseleave", () => {
        blob.style.opacity = "0";
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      for (const rect of rects) {
        const element = rect as HTMLDivElement;
        element.removeEventListener("mousemove", () => {});
        element.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);
  /// ############################# CONTAINER HOVER EFFECT #############################
  /// ############################# CONTAINER HOVER EFFECT #############################

  function addUsage(id: string, value: number) {
    let currjson: usageJsonArr = usage_json;
    let found = _.find(currjson, { id: id });
    if (found) {
      found.value += value;
    } else {
      currjson.push({ id: id, value: value });
    }
    setUsage_json(currjson);
  }

  const toggleOption = (optionName: keyof typeof options) => {
    setOptions((prevState) => ({
      ...prevState,
      [optionName]: !prevState[optionName],
    }));
  };

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
      ? type === "options"
        ? ""
        : "2px solid rgba(229, 231, 235, 0.6)"
      : "2px solid red";
    return correct;
  }

  async function sendMail() {
    check_correct(formname, "formname", "text");
    check_correct(formemail, "formemail", "email");
    check_correct(
      [options.cust, options.auto, options.db, options.allg, options.bera],
      "formoptions",
      "options",
    );
    if (
      !(
        check_correct(formname, "formname", "text") &&
        check_correct(formemail, "formemail", "email") &&
        check_correct(
          [options.cust, options.auto, options.db, options.allg, options.bera],
          "formoptions",
          "options",
        )
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
          { name: "Custom-Solution", value: options.cust },
          { name: "Automation", value: options.auto },
          { name: "Datenbank", value: options.db },
          { name: "Allgemein", value: options.allg },
          { name: "Beratung", value: options.bera },
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

  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== "undefined") {
      const ScrollMagic = require("scrollmagic");
      const controller = new ScrollMagic.Controller();

      // Fade_In_Elem loop
      const fadeElems = document.querySelectorAll(".Fade_In_Elem");

      for (let sceneelem of fadeElems) {
        new ScrollMagic.Scene({
          triggerElement: sceneelem,
          duration: sceneelem.clientHeight + window.innerHeight * 0.8,
          triggerHook: 0.8,
        })
          .setClassToggle(sceneelem, "SM_Fade_In")
          .addTo(controller);
      }

      // Fade_In_Elem_Less loop
      const fadeLessElems = document.querySelectorAll(".Fade_In_Elem_Less");

      for (let sceneelem of fadeLessElems) {
        new ScrollMagic.Scene({
          triggerElement: sceneelem,
          duration: sceneelem.clientHeight + window.innerHeight * 0.9,
          triggerHook: 0.9,
        })
          .setClassToggle(sceneelem, "SM_Fade_In")
          .addTo(controller);
      }
    }
  }, [options, mailsucc, mailpending, mailfailed]);

  return (
    <>
      {/* Start First Page Wrapper */}
      <div
        id="Home"
        className="w-full md:h-[100vh] relative flex flex-col items-center"
      >
        <Header scrolltoAnchor={scrolltoAnchor} />
        {/* Start Hero Wrapper */}
        <div className="mt-20 xxs:mt-32 xs:mt-32 md:h-[84vh] w-full flex flex-col items-center">
          {/* Start Hero Content Wrapper */}
          <div className=" md:absolute md:top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-[90%] xl:w-[70%] flex flex-col gap-4 lg:gap-7 items-center">
            <h1
              className={
                monte.className +
                " select-none Fade_In_Elem tracking-[0.3em] text-4xl md:text-3xl 2xl:text-[68px] desktop:text-[77px] mb-4 text-center"
              }
            >
              Verge-One
            </h1>
            <h3 className="w-ful56l Fade_In_Elem text-center 2xl:mt-5 text-md 2xl:text-xl tracking-[0.22em] xl:tracking-[0.27em]">
              Ihr Partner für Software-Lösungen,
              <br />
              die das Beste aus ihrem Unternehmen herausholen.
            </h3>
            <button
              onClick={() => {
                scrolltoAnchor("Kontakt");
                addUsage("KontaktHero", 1);
              }}
              className="border-solid Fade_In_Elem rounded-full border-[1px] lg:border-[2px] mt-2 border-white tracking-[0.25em] text-md xl:text-lg font-normal py-1.5 px-6 xl:py-[0.35rem] xl:px-7"
            >
              Kontakt
            </button>
            <Image
              className="select-none Fade_In_Elem drag absolute top-1/2 left-1/2 -translate-x-1/2 blur-[100px] -translate-y-1/2 -z-10"
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
      <div className="mt-72 flex items-center justify-center">
        {/* Start Intro Content Wrapper */}
        <div className="flex flex-col gap-8 items-center justify-center">
          <h2
            className={
              monte.className +
              " text-center Fade_In_Elem text-3xl 2xl:text-[60px] font-medium tracking-[0.25em]"
            }
          >
            Wer sind wir?
          </h2>
          <p className=" Fade_In_Elem text-center 2xl:text-2xl leading-6 2xl:leading-10 tracking-[0.23em] 2xl:tracking-[0.27em] w-[70%]">
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
      <div className="hidden lg:block h-[100vh] w-full relative">
        {/*TODO: Do something with this blob, animate it*/}
        <Image
          id="Blob_Animate"
          className=" blur-[200px] opacity-40 select-none drag absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          src="/hero_high.svg"
          alt="Blob"
          width={3500}
          height={2500}
        />
        <Logo />
      </div>
      {/* End Scroll-animation Wrapper */}
      {/* Start Mission Wrapper */}
      <div className="mt-48 lg:mt-0 flex flex-col items-center justify-center ">
        {/* Start Mission Content Wrapper */}
        <div className="flex flex-col gap-8 items-center justify-center w-full">
          <h2
            className={
              monte.className +
              "  text-3xl xl:text-[55px] Fade_In_Elem 2xl:text-[60px] font-medium tracking-[0.25em]"
            }
          >
            Unsere Mission
          </h2>
          <p className=" text-center Fade_In_Elem xl:text-xl 2xl:text-2xl desktop:mt-8 leading-7 xl:leading-[2.2rem] 2xl:leading-[2.75rem] tracking-[0.21em] w-[70%]">
            Bei Verge-One spezialisieren wir uns auf die Automatisierung
            repetitiver Aufgaben, um Ihrem Unternehmen Zeit und Geld zu sparen.
            Durch maßgeschneiderte Anwendungen und Datenbankintegration sorgen
            wir dafür, dass Ihre Abläufe effizienter und kostengünstiger werden.
            Unsere Lösungen senken nicht nur Ihre Kosten, sondern eliminieren
            auch Fehler, die durch manuelle Handhabung entstehen.
          </p>
        </div>
        <div className="flex flex-col Fade_In_Elem gap-10 items-center justify-center mt-80 w-full">
          <h2
            className={
              monte.className +
              "  text-center text-2xl w-[75%] xl:text-[43px] 2xl:text-[52px] font-medium tracking-[0.25em]"
            }
          >
            Alle Vorteile auf einen Blick
          </h2>
          <div className="grid grid-cols-1 desktop:mt-10 lg:grid-cols-5 gap-x-4 gap-y-4 w-[85%] backdrop-blur-md rounded-3xl font-light">
            <div className="flex anim_cont_grad overflow-hidden relative flex-col h-80 xl:h-72 missionItem text-center rounded-xl lg:col-span-2 bg-gray-200/15 items-center justify-start tracking-[0.2em] px-9 py-7">
              <div className="flex justify-center items-center h-[18%] lg:h-1/4">
                <h3
                  className={
                    monte.className + " font-normal text-xl xl:text-3xl"
                  }
                >
                  Datenintegrität
                </h3>
              </div>
              <div className="flex justify-center items-center h-[85%] lg:h-3/4">
                <p className="vorteil-desc">
                  Manuelle Dateneingabe kann zu Fehlern führen. Unsere
                  automatisierten Lösungen gewährleisten die Genauigkeit und
                  Integrität der Daten, reduzieren das Risiko von Fehlern und
                  sorgen für verlässliche Informationen.
                </p>
              </div>
              <Image
                className="blur-[100px] transition-opacity opacity-0 select-none absolute -translate-y-1/2 -translate-x-1/2 blob_to_move"
                src="/hero_high.svg"
                alt="Blob"
                width={600}
                height={450}
              />
            </div>
            <div className="flex flex-col relative anim_cont_grad overflow-hidden h-80 xl:h-72 missionItem lg:col-span-3 text-center rounded-xl bg-gray-200/30 items-center justify-center tracking-[0.2em] px-9 py-7">
              <div className="flex justify-center items-center h-[18%] lg:h-1/4">
                <h3
                  className={
                    monte.className + " font-normal text-xl xl:text-3xl"
                  }
                >
                  Zentrale Datenverwaltung
                </h3>
              </div>
              <div className="flex justify-center items-center h-[82%] lg:h-3/4">
                <p className="vorteil-desc">
                  Verabschieden Sie sich von verstreuten Excel-Dateien und
                  inkonsistenten Daten. Mit unserer zentralen Datenverwaltung
                  werden alle Ihre Informationen sicher an einem Ort gespeichert
                  und sind leicht zugänglich und verwaltbar.
                </p>
              </div>
              <Image
                className="blur-[100px] transition-opacity opacity-0 select-none absolute -translate-y-1/2 -translate-x-1/2 blob_to_move"
                src="/hero_high.svg"
                alt="Blob"
                width={600}
                height={450}
              />
            </div>
            <div className="flex flex-col relative anim_cont_grad overflow-hidden h-80 xl:h-72 missionItem text-center rounded-xl lg:col-span-3 bg-gray-200/15 lg:bg-gray-200/30 items-center justify-start tracking-[0.2em] px-9 py-7">
              <div className="flex justify-center items-center h-[18%] lg:h-1/4">
                <h3
                  className={
                    monte.className + " font-normal text-xl xl:text-3xl"
                  }
                >
                  Kosteneffizienz
                </h3>
              </div>
              <div className="flex justify-center items-center h-[82%] lg:h-3/4">
                <p className="vorteil-desc">
                  Unser wettbewerbsfähiger Preis stellt sicher, dass Sie den
                  besten Wert für Ihre Investition erhalten und hochwertige
                  Automatisierungslösungen für Ihr Unternehmen zugänglich
                  machen.
                </p>
              </div>
              <Image
                className="blur-[100px] transition-opacity opacity-0 select-none absolute -translate-y-1/2 -translate-x-1/2 blob_to_move"
                src="/hero_high.svg"
                alt="Blob"
                width={600}
                height={450}
              />
            </div>
            <div className="flex flex-col relative anim_cont_grad overflow-hidden missionItem h-80 xl:h-72 lg:col-span-2 text-center rounded-xl bg-gray-200/30 lg:bg-gray-200/15 items-center justify-center tracking-[0.2em] px-9 py-7">
              <div className="h-[18%] lg:h-1/4 flex justify-center items-center">
                <h3
                  className={
                    monte.className + " font-normal text-xl xl:text-3xl"
                  }
                >
                  Zeitersparnis
                </h3>
              </div>
              <div className="flex justify-center items-center h-[82%] lg:h-3/4">
                <p className="vorteil-desc">
                  Durch vollständig optimierte Automatisierung werden Ihre
                  Arbeitsabläufe gestrafft, was wertvolle Zeit spart und Ihrem
                  Team ermöglicht, sich auf strategischere Aufgaben zu
                  konzentrieren.
                </p>
              </div>
              <Image
                className="blur-[100px] transition-opacity opacity-0 select-none absolute -translate-y-1/2 -translate-x-1/2 blob_to_move"
                src="/hero_high.svg"
                alt="Blob"
                width={600}
                height={450}
              />
            </div>
          </div>
        </div>
        {/* End Mission Content Wrapper */}
      </div>
      {/* End Mission Wrapper */}
      {/* Start Customer Wrapper */}
      <h2 className="text-center Fade_In_Elem text-2xl xl:text-5xl mt-48 leading-[2.75rem] tracking-[0.23em]">
        Kundenstimmen
      </h2>
      <div className="grid grid-cols-1 Fade_In_Elem lg:grid-cols-2 gap-y-6 gap-x-6 my-16 w-full px-[8%] ">
        <div className="review relative anim_cont_grad overflow-hidden ">
          <h2>LaMa Bio</h2>
          <p>
            Toller Service. Kann ich nur weiterempfehlen. Lief alles reibungslos
            ab und jegliche Anfragen wurden schnellstmöglich überarbeitet. Kann
            ich nur weiterempfehlen.
          </p>
          <Image
            className="blur-[100px] transition-opacity opacity-0 select-none absolute -translate-y-1/2 -translate-x-1/2 blob_to_move"
            src="/hero_high.svg"
            alt="Blob"
            width={500}
            height={350}
          />
        </div>
        <div className="review relative anim_cont_grad overflow-hidden ">
          <h2>LaMa Bio</h2>
          <p>
            Toller Service. Kann ich nur weiterempfehlen. Lief alles reibungslos
            ab und jegliche Anfragen wurden schnellstmöglich überarbeitet. Kann
            ich nur weiterempfehlen.
          </p>
          <Image
            className="blur-[100px] transition-opacity opacity-0 select-none absolute -translate-y-1/2 -translate-x-1/2 blob_to_move"
            src="/hero_high.svg"
            alt="Blob"
            width={500}
            height={350}
          />
        </div>
      </div>
      {/* End Customer Wrapper */}
      {/* Start Offer Wrapper */}

      {/* Start Offers */}

      {/* End Offer Wrapper */}
      {/* Start Form Wrapper */}
      <div id="Kontakt" className={inter.className + " form"}>
        <h2
          className={
            " text-2xl Fade_In_Elem xl:text-3xl mt-64 bg-gradient-to-br border-gray-300 tracking-[0.21em] text-center"
          }
        >
          Wir freuen Uns auf Ihre Nachricht!
        </h2>
        <div className="Fade_In_Elem">
          <p>Vor-, Nachname</p>
          <input
            id="formname"
            type="text"
            name="name"
            onChange={(e) => {
              setformname(e.target.value);
            }}
          />
        </div>
        <div className="Fade_In_Elem">
          <p className=" font">Email</p>
          <input
            id="formemail"
            type="email"
            name="email"
            onChange={(e) => {
              setformemail(e.target.value);
            }}
          />
        </div>
        <div className="Fade_In_Elem">
          <p>Ich bin interessiert an...</p>
          <div
            id="formoptions"
            className="grid gap-4 font-light xl:font-norrmal grid-cols-1 xl:grid-cols-3 *:grow rounded-2xl p-3 mt-2"
          >
            <button
              onClick={() => toggleOption("cust")}
              className={options.cust ? "option-enabled" : "option-disabled"}
            >
              Custom-Anwendung
            </button>
            <button
              onClick={() => toggleOption("auto")}
              className={options.auto ? "option-enabled" : "option-disabled"}
            >
              Automationen
            </button>
            <button
              onClick={() => toggleOption("db")}
              className={options.db ? "option-enabled" : "option-disabled"}
            >
              Datenbankanbindung
            </button>
            <button
              onClick={() => toggleOption("bera")}
              className={options.bera ? "option-enabled" : "option-disabled"}
            >
              Beratungsgespräch
            </button>
            <button
              onClick={() => toggleOption("allg")}
              className={options.allg ? "option-enabled" : "option-disabled"}
            >
              Allgemein
            </button>
          </div>
        </div>
        <div className="Fade_In_Elem_Less">
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
            if (!mailfailed && !mailpending && !mailsucc) sendMail();
          }}
          className={
            "flex items-center Fade_In_Elem_Less z-10 gap-2 border-solid rounded-full border-[1px] lg:border-2 border-white tracking-[0.2em] lg:text-xl font-normal py-2 " +
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
          <div className="bg-green-300/50 flex justify-center items-center rounded-xl max-w-fit px-24 h-14 ">
            Nachricht erfolgreich versendet!
          </div>
        ) : (
          <></>
        )}
        {mailfailed ? (
          <div className="bg-red-300/50 flex justify-center items-center rounded-xl max-w-fit px-24 h-14 ">
            Senden fehlgeschlagen! Versuche es bitte später erneut.
          </div>
        ) : (
          <></>
        )}
        {missing ? (
          <div className="bg-orange-300/50 flex justify-center items-center rounded-xl max-w-fit px-24 h-14 ">
            Bitte alle Felder ausfüllen!
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* End Form Wrapper */}
      <Footer
        addUsage={addUsage}
        inter={inter}
        scrolltoAnchor={scrolltoAnchor}
      />
    </>
  );
}
