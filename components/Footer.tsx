import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import Link from "next/link";
//TODO: adapt footer for mobile
const Footer = ({
  scrolltoAnchor,
  inter,
}: {
  scrolltoAnchor: any;
  inter: NextFont;
}) => {
  return (
    <div className="*:hover:cursor-pointer h-[20vh] mt-24 w-full flex items-center px-24 relative text-white tracking-[0.25em]">
      <div className="flex flex-col items-center gap-2">
        <Image
          onClick={() => scrolltoAnchor("Home")}
          src="/logo.svg"
          alt="Logo"
          width={65}
          height={62}
          className="select-none xl:w-14 xl:h-14 2xl:w-16 2xl:h-16"
        />
        <h2 onClick={() => scrolltoAnchor("Home")}>Verge-One</h2>
      </div>
      <div
        className={
          inter.className + " flex gap-12 absolute left-1/2 -translate-x-1/2"
        }
      >
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutzerklärung">Datenschutzerklärung</Link>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
