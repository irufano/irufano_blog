import { useState } from "react";

const ExpansionTile = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="shadow-sm rounded-md border-2 border-gray-200 dark:border-gray-700">
      <div
        className="flex justify-between items-center px-4 py-2 cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="text-base font-medium text-gray-500 dark:text-gray-400">{title}</div>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      {isOpen && <div className="p-4 border-t border-gray-200 dark:border-gray-700">{children}</div>}
    </div>
  );
};

export default ExpansionTile;
