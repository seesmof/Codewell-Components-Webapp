import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="max-w-7xl lg:pb-4 container flex items-center justify-between pt-6 mx-auto">
        <a className="hover:text-zinc-700 mr-16 text-lg font-bold duration-300">
          spense.
        </a>

        <div className="sm:flex flex-row items-center hidden gap-4">
          <a className="hover:underline underline-offset-2 font-medium capitalize">
            Business
          </a>
          <a className="hover:underline underline-offset-2 font-medium capitalize">
            pricing
          </a>
          <a className="hover:underline underline-offset-2 font-medium capitalize">
            features
          </a>
        </div>

        <div className="sm:flex flex-row items-center hidden gap-4">
          <a className="hover:underline underline-offset-2 font-medium capitalize">
            login
          </a>
          <a className="bg-black text-white font-medium rounded px-4 py-2 hover:bg-neutral-800 duration-300">
            Get Started
          </a>
        </div>

        <a href="#" className="sm:hidden">
          <img
            src="/spense-landing-page/Assets/Hamburger Menu.svg"
            alt="Hamburger menu icon"
          />
        </a>
      </header>
    </>
  );
};

export default Navbar;
