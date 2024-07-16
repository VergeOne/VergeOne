import Image from "next/image";
import Link from "next/link";
const Header = ({ scrolltoAnchor }: { scrolltoAnchor: any }) => {
  return (
    <div className="h-[14vh] w-full flex items-center relative text-white tracking-[0.25em]">
      <div className="animate-fadeLeft absolute left-20 flex items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={65} height={62} />
        </Link>
      </div>
      <div className="flex gap-8 items-center *:hover:cursor-pointer animate-fadeTop absolute left-1/2 -translate-x-1/2 font-normal text-[1.3rem]">
        <h2 onClick={() => scrolltoAnchor("Home")}>Home</h2>
        <h2 onClick={() => scrolltoAnchor("Dienstleistungen")}>
          Dienstleistungen
        </h2>
        <h2 onClick={() => scrolltoAnchor("Preise")}>Preise</h2>
        <h2 onClick={() => scrolltoAnchor("Portfolio")}>Portfolio</h2>
        <h2 onClick={() => scrolltoAnchor("Kontakt")}>Kontakt</h2>
      </div>
      <div className="animate-fadeRight flex select-none gap-8 items-center absolute right-20">
        <Image
          src="/instagram.svg"
          alt="Instagram-logo"
          width={29}
          height={29}
        />
        <Image src="/whatsapp.svg" alt="WhatsApp-logo" width={29} height={29} />
        <Image src="/mail.svg" alt="E-Mail-Icon" width={32} height={32} />
      </div>
    </div>
  );
};

export default Header;
