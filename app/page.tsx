"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <div className="relative h-full ml-32 mr-32  border-x-2 border-brand-prim text-white">
      <div className="h-lvh relative">
        <div className="relative h-[10vh]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full flex items-center gap-6  text-xl">
            <Link className={pathname == "/" ? "underline" : ""} href="/">
              Home
            </Link>
            <Link
              href="/Portfolio"
              className={pathname == "/Portfolio" ? "underline" : ""}
            >
              Portfolio
            </Link>
            <Link
              className={pathname == "/Preise" ? "underline" : ""}
              href="/Preise"
            >
              Preise
            </Link>
            <Link
              className={pathname == "/Kontakt" ? "underline" : ""}
              href="/Kontakt"
            >
              Kontakt
            </Link>
          </div>
        </div>
        <div id="hero" className="h-[90vh]">
          <div className="flex flex-col gap-4 items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center select-none w-[70%]">
            <h1 className="text-[70px] tracking-[0.15em]">
              <span className="text-brand-prim">V</span>erge-
              <span className="text-brand-sec">O</span>ne
            </h1>
            <p className="text-2xl tracking-widest">
              Ihr Partner für Atemberaubende Online-Lösungen, die ihnen nicht
              nur Zeit sparen, sondern das beste daraus machen
            </p>
            <button className="rounded-full mt-2 tracking-widest font-medium border-solid border-white py-2 px-6 border-2 bg-gradient-to-br from-brand-sec/70 to-brand-prim/70">
              Kostenlose Beratung
            </button>
            <Image
              className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[250px]"
              src="/highlight_white.svg"
              alt="highlight"
              width={1000}
              height={500}
            />
          </div>
        </div>
        <div className="bg-white w-lvw h-[1px] absolute bottom-0 left-1/2 -translate-x-1/2" />
      </div>
      {/* END HERO */}
      {/* Introduction */}
      <div className="h-[60vh] relative">
        <div className="ml-32 h-full mr-32 px-14 py-14 border-white border-x-[1px] flex justify-between items-center">
          <div className="w-2/3 text-xl tracking-widest">
            <p>
              Du willst dir und deinem Team so viel Zeit wie möglich einsparen
              und zur selben Zeit deine Reichweite sowie deinen Umsatz steigern?
              Schlechter Witz? Ganz und Gar Nicht. Unser Team setzt sich für
              dein Unternehmen ein, als wär es unseres. Überzeuge dich selbst
              mit 100% Geld zurück Garantie
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center w-1/3">
            <h1 className=" text-[75px] h-[75px] underline underline-offset-4 decoration-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-brand-prim to-brand-sec">
                100
              </span>
              %
            </h1>
            <h2 className="text-3xl">Geld zurück</h2>
          </div>
        </div>
        <div className="bg-white w-lvw h-[1px] absolute bottom-0 left-1/2 -translate-x-1/2" />
      </div>
      {/* END Introduction */}
      <div className="h-[200vh]"></div>
    </div>
  );
}
