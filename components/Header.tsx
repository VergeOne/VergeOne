import Image from "next/image";
const Header = ({ scrolltoAnchor }: { scrolltoAnchor: any }) => {
  return (
    <div className="h-[14vh] w-full flex items-center relative text-white tracking-[0.25em]">
      <div className="animate-fadeLeft absolute left-5 2xl:left-20 flex items-center">
        <Image
          className="select-none w-11 h-11 xxs:w-14 xxs:h-14 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16"
          src="/logo.svg"
          alt="Logo"
          width={65}
          height={62}
        />
      </div>
      <div className=" xl:header-animate-xl 2xl:header-animate-2xl 4xl:w-[45%] 3xl:w-[52%] lg:w-[60%] header-animate-lg hidden md:flex z-40 justify-between links items-center *:hover:cursor-pointer animate-fadeTop absolute left-1/2 -translate-x-1/2  text-lg  2xl:text-[1.2rem]">
        <h2 onClick={() => scrolltoAnchor("Home")}>Home</h2>
        <h2 onClick={() => scrolltoAnchor("Dienstleistungen")}>
          Dienstleistungen
        </h2>
        <h2 onClick={() => scrolltoAnchor("Portfolio")}>Portfolio</h2>
        <h2 onClick={() => scrolltoAnchor("Preise")}>Preise</h2>
        <h2 onClick={() => scrolltoAnchor("Kontakt")}>Kontakt</h2>
        <div className="absolute bottom-0 left-5 bg-gradient-to-r from-brand-prim to-brand-sec h-0.5 timeline" />
      </div>
      <Image
        className="w-10 h-10 right-5 absolute md:hidden"
        src={"/hamburger.svg"}
        alt={"hamburger"}
        width={52}
        height={52}
      />
      <div className="animate-fadeRight-sm sm:animate-fadeRight flex select-none gap-6 lg:gap-8 items-center absolute left-1/2 -translate-x-1/2 sm:left-auto sm:right-20">
        <a target="_blank" href="https://instagram.com/_vergeone_">
          <Image
            className="headericons"
            src="/instagram.svg"
            alt="Instagram-logo"
            width={29}
            height={29}
          />
        </a>
        <a target="_blank" href="">
          <Image
            className="headericons"
            src="/whatsapp.svg"
            alt="WhatsApp-logo"
            width={29}
            height={29}
          />
        </a>
        <a href="mailto:info@verge-one.com">
          <Image
            className="headericons scale-110"
            src="/mail.svg"
            alt="E-Mail-Icon"
            width={32}
            height={32}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
