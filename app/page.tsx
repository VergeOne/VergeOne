import Image from "next/image";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Link from "next/link";

const monte = Montserrat({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      {/* Start First Page Wrapper */}
      <div className="w-full h-[100vh] relative">
        <Header />
        {/* Start Hero Wrapper */}
        <div className="h-[84vh] w-full">
          {/* Start Hero Content Wrapper */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] flex flex-col gap-6 items-center">
            <h1 className="tracking-[0.3em] text-[60px] text-center">
              Verge-One
            </h1>
            <h3 className="w-full text-center text-2xl tracking-[0.25em]">
              Ihr Partner für Web-Dienstleistungen,
              <br />
              die ihr Unternehmen herausstechen lassen.
            </h3>
            <Link href="/#Kontakt">
              <button className="border-solid rounded-full border-[1px] border-white tracking-[0.25em] text-xl font-normal py-2 px-9">
                Kontakt
              </button>
            </Link>
            <Image
              className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
              src="/hero_high.svg"
              alt="Blob"
              width={1000}
              height={700}
            />
          </div>
          {/* End Hero Content Wrapper */}
        </div>
        {/* End Hero Wrapper */}
      </div>
      {/* End First Page Wrapper */}
    </>
  );
}
