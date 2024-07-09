import Image from "next/image";
import { Montserrat } from "next/font/google";

const monte = Montserrat({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <div className="w-full h-[200vh]"></div>
    </>
  );
}
