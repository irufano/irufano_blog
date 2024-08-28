import IrufanoDevLogo from "@/components/Logo/IrufanoDevLogo";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchButton from "../../Button/SearchButton";
import ThemeToggle from "../../Button/ThemeToggle";

export default function DevNavbar({ solid = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const hrefRoot = "/wish";
  const hrefPackages = "/wish/packages";

  const onOdysseyClick = () => {
    redirectToOdysseyWebsite();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 
      ${
        solid
          ? "bg-surface dark:bg-surface-dark shadow-sm"
          : isScrolled
          ? "bg-surface/20 backdrop-blur-md dark:bg-surface-dark/30 shadow-sm"
          : isOpen
          ? "bg-surface dark:bg-surface-dark"
          : "bg-transparent dark:bg-transparent"
      }
    `}
    >
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text dark:text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M18 6 L6 18" />
                <path d="M6 6 L18 18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="180.276 2174.957 627.448 490.086"
                width="627.448pt"
                height="490.086pt"
                className="w-6 h-6"
              >
                <path
                  d=" M 219.276 2213.957 L 768.724 2213.957 M 219.276 2420 L 768.724 2420 M 219.276 2626.043 L 348 2626.043 L 504 2626.043 L 528 2626.043"
                  fill="none"
                  strokeWidth="56"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="text-xl font-bold">
          <Link href="/">
            <IrufanoDevLogo />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center text-md font-medium">
          <Link href="/">
            <h3 className="text-text mr-2 dark:text-text-dark hover:text-primary dark:hover:text-primary-dark">
              Home
            </h3>
          </Link>
          <Link href="/tools">
            <h3 className="text-text mr-2 dark:text-text-dark hover:text-primary dark:hover:text-primary-dark">
              Tools
            </h3>
          </Link>
          <Link href="/insight">
            <h3 className="text-text mr-2 dark:text-text-dark hover:text-primary dark:hover:text-primary-dark">
              Insight
            </h3>
          </Link>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <ThemeToggle />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-4 justify-center items-start text-center text-md font-medium">
          <Link href="/">
            <h3 className="block py-2 text-text dark:text-text-dark hover:text-primary dark:hover:text-primary-dark">
              Home
            </h3>
          </Link>
          <Link href="/tools">
            <h3 className="block py-2 text-text dark:text-text-dark hover:text-primary dark:hover:text-primary-dark">
              Tools
            </h3>
          </Link>
          <Link href="/insight">
            <h3 className="block py-2 text-text dark:text-text-dark hover:text-primary dark:hover:text-primary-dark">
              Insight
            </h3>
          </Link>
        </div>
      )}
    </nav>
  );
}
