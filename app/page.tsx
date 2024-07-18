"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";

const monte = Montserrat({ subsets: ["latin"] });
export default function Home() {
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
              die ihr Unternehmen herausstechen lassen.
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
      <div className="h-[70vh] flex items-center justify-center">
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
          <p className="text-animate text-center text-2xl leading-10 tracking-[0.27em] w-[70%]">
            Wir wissen wie wertvoll Ihre Zeit ist. Daher geben wir unser Bestes
            Ihnen davon so viel wie möglich einzusparen.
            <br />
            <br />
            Wir bieten Ihnen maßgeschneiderte Anwendungen nach ihren Belieben.
            Kein Kaufen und Ärgern über fehlende Funktionen mehr.
            <br />
            <br /> Sagen Sie uns einfach was Sie brauchen und wir setzten es um.
          </p>
        </div>
        {/* End Mission Content Wrapper */}
      </div>
      {/* End Mission Wrapper */}
      <div className="h-[50vh]"></div>
    </>
  );
}
