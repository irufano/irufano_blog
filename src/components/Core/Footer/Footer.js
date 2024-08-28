import Image from "next/image";
import Logo from "../../../assets/irufano-square-logo.svg";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="p-4 py-16 text-center text-base text-gray-500">
      <p className="flex items-center justify-center">
        {" "}
        <span className="font-bold"> irufano.github.io</span>{" "}
        <span className="px-2">
          <Image src={Logo} className=" w-ful w-4 h-auto" />
        </span>{" "}
        {year}
      </p>
    </footer>
  );
};

export default Footer;
