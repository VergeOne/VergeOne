import Image from "next/image";
const Header = ({ scrolltoAnchor }: { scrolltoAnchor: any }) => {
  return (
    <div className="h-[14vh] w-full flex items-center relative text-white tracking-[0.25em]">
      <div className="animate-fadeLeft absolute left-5 md:left-12 lg:left-14 xl:left-16 2xl:left-20 flex items-center">
        <Image
          className="select-none Fade_In_Elem w-11 h-11 xxs:w-14 xxs:h-14 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16"
          src="/logo.svg"
          alt="Logo"
          width={65}
          height={62}
        />
      </div>
      <div className="lg:header-animate-lg xl:header-animate-xl 2xl:header-animate-2xl desktop:header-animate-4xl hidden w-[60%] laptop:w-[53%] desktop:w-[45%] md:flex z-40 justify-between links items-center *:hover:cursor-pointer animate-fadeTop absolute left-1/2 -translate-x-1/2  text-lg  2xl:text-[1.2rem]">
        <h2 className={"Fade_In_Elem"} onClick={() => scrolltoAnchor("Home")}>
          Home
        </h2>
        <h2
          className={"Fade_In_Elem"}
          onClick={() => scrolltoAnchor("Dienstleistungen")}
        >
          Blog
        </h2>
        <h2
          className={"Fade_In_Elem"}
          onClick={() => scrolltoAnchor("Portfolio")}
        >
          Portfolio
        </h2>
        <h2 className={"Fade_In_Elem"} onClick={() => scrolltoAnchor("Preise")}>
          Preise
        </h2>
        <h2
          className={"Fade_In_Elem"}
          onClick={() => scrolltoAnchor("Kontakt")}
        >
          Kontakt
        </h2>
        <div className="absolute bottom-0 left-5 bg-gradient-to-r from-brand-prim to-brand-sec h-0.5 timeline" />
      </div>
      <Image
        className="w-10 h-10 right-5 Fade_In_Elem absolute md:hidden"
        src={"/hamburger.svg"}
        alt={"hamburger"}
        width={52}
        height={52}
      />
      <div className="animate-fadeRight-sm sm:animate-fadeRight flex select-none gap-6 2xl:gap-8 items-center absolute left-1/2 -translate-x-1/2 sm:left-auto sm:right-8 md:right-12 lg:right-14 xl:right-16 2xl:right-20">
        <a target="_blank" href="https://instagram.com/_vergeone_">
          <Image
            className="headericons Fade_In_Elem"
            src="/instagram.svg"
            alt="Instagram-logo"
            width={29}
            height={29}
          />
        </a>
        <a target="_blank" href="https://wa.me/4917683419242">
          <Image
            className="headericons Fade_In_Elem"
            src="/whatsapp.svg"
            alt="WhatsApp-logo"
            width={29}
            height={29}
          />
        </a>
        <a href="mailto:info@verge-one.com">
          <Image
            className="headericons Fade_In_Elem scale-110"
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
