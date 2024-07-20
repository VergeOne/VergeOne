import Image from "next/image";
import Link from "next/link";

const Footer = ({ scrolltoAnchor }: { scrolltoAnchor: any }) => {
  return (
    <div className="*:hover:cursor-pointer h-[20vh] w-full flex items-center justify-between px-24 relative text-white tracking-[0.25em]">
      <div className="flex flex-col gap-2">
        <Image
          onClick={() => scrolltoAnchor("Home")}
          src="/logo.svg"
          alt="Logo"
          width={65}
          height={62}
        />
        <h2 onClick={() => scrolltoAnchor("Home")}>Verge-One</h2>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;
