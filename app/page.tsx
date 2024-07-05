"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <div className="relative h-full ml-32 mr-32  border-x-2 border-brand-prim border-solid text-white">
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
            Ihr Partner für Atemberaubende Online-Lösungen, die ihnen nicht nur
            Zeit sparen, sondern das beste daraus machen
          </p>
          <button className="rounded-full mt-2 tracking-widest font-medium border-solid border-white py-2 px-6 border-2 bg-gradient-to-br from-brand-sec/70 to-brand-prim/70">
            Kostenlose Beratung
          </button>
          <Image
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="/highlight_white.svg"
            alt="highlight"
            width={800}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
