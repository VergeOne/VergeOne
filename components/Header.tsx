import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className="h-[14vh] w-full flex items-center relative text-white tracking-[0.2em]">
      <div className="absolute left-20 flex items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={65} height={62} />
        </Link>
      </div>
      <div className="flex gap-6 items-center absolute left-1/2 -translate-x-1/2 font-normal text-xl">
        <Link className="" href="/">
          Home
        </Link>
        <Link href="/#Dienstleistungen">Dienstleistungen</Link>
        <Link href="/#Preise">Preise</Link>
        <Link href="/#Portfolio">Portfolio</Link>
        <Link href="/#Kontakt">Kontakt</Link>
      </div>
      <div className="flex gap-8 items-center absolute right-20">
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
