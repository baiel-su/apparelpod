import { useState } from "react";
import apparelpodLogo1 from "/ApparelPod/apparelpodLogo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex sm:flex-row flex-col px-5 justify-between sm:items-center py-5">
      <img src={apparelpodLogo1} className="w-32 p-0 m-0 h-auto" alt="Logo" />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block sm:hidden text-gray-500 focus:outline-none absolute top-5 right-5 z-50"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      <ul
        className={` ${
          isOpen ? "block " : "hidden"
        } sm:block sm:flex-row flex-col flex gap-5 text-lg pt-5`}
      >
        {navLinks.map((item, index) => (
          <a href={item.link} key={index} className="font-bold sm:px-5">
            {item.label}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

const navLinks = [
  {
    label: "Home",
    link: "#home",
  },
  {
    label: "Products",
    link: "#products",
  },
  {
    label: "Business",
    link: "#business",
  },
  {
    label: "Sign In",
    link: "#sign-in",
  },
];
