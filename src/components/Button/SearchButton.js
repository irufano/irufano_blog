import { Search } from "feather-icons-react";
import { useRouter } from "next/router";

const SearchButton = ({ hasText = false }) => {
  const router = useRouter();
  const searchOnClicked = () => {
    router.push(`/insight/search`);
  };

  return (
    <button
      onClick={searchOnClicked}
      className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-2 rounded-full focus:outline-none 
        ${hasText ? "px-4" : ""}
        `}
      aria-label="Toggle Theme"
    >
      <Search className="w-auto h-5 text-secondary" />
      {hasText ? (
        <span className="ml-2 text-md text-text dark:text-text-dark">
          Search
        </span>
      ) : (
        <></>
      )}
    </button>
  );
};

export default SearchButton;
