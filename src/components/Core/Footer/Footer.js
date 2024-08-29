import Image from "next/image";
import Logo from "../../../assets/irufano-square-logo.svg";
import IrufanoLogo from "@/components/Logo/IrufanoLogo";
import FeatherIcon from "feather-icons-react";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="container mx-auto p-4 py-16 text-center   ">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between justify-center  items-center  space-y-1">
        <div>
          <IrufanoLogo />
        </div>
        <Image src={Logo} className="hidden md:inline-block w-ful w-4 h-auto" />
        <div className="flex items-center ">
          <h3 className="text-sm text-gray-500">irufano.github.io © {year}</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
