import React from "react";

const MainPage = () => {
  return (
    <>
      <section className="bg-center bg-no-repeat bg-cover bg-[url('/snipper-landing-page/Assets/Background.png')]">
        <div className="lg:max-w-5xl container px-6 mx-auto">
          <header className="flex items-center justify-between pt-6">
            <a href="#">
              <img
                src="/snipper-landing-page/Assets/Logo.svg"
                alt="logo image"
              />
            </a>
            <nav>
              <div className="sm:flex md:gap-6 items-center hidden gap-4">
                <a href="#">
                  <img
                    src="/snipper-landing-page/Assets/Search Icon.svg"
                    alt="search icon"
                  />
                </a>
                <a
                  href="#"
                  className="hover:underline font-medium capitalize duration-300"
                >
                  sign in
                </a>
                <a
                  href="#"
                  className="bg-neutral-900 hover:bg-neutral-700 md:px-6 px-4 py-2 font-bold tracking-wide text-white rounded-md"
                >
                  Get started
                  <span className="text-zinc-400 font-normal">- it's free</span>
                </a>
              </div>
              <a href="#" className="text-neutral-900 sm:hidden text-3xl">
                <img
                  src="/snipper-landing-page/Assets/Hamburger Menu.svg"
                  alt=""
                />
              </a>
            </nav>
          </header>
          <main className="sm:gap-3 sm:px-12 sm:pt-12 xl:pt-16 flex flex-col items-center justify-center gap-4 py-8 text-center">
            <h1 className="sm:px-12 xl:text-6xl px-4 pb-2 text-5xl font-bold capitalize">
              gorgeous code snippets
            </h1>
            <p className="text-neutral-800 font-medium">
              With Snipper, create fully customizable code snippets in a matter
              of seconds right from your browser
            </p>
            <a
              href="#"
              className="bg-neutral-900 hover:bg-neutral-700 sm:w-fit w-full px-4 py-3 font-bold tracking-wide text-white rounded-md"
            >
              Get started
              <span className="text-zinc-400 font-medium">- it's free</span>
            </a>
            <p className="text-neutral-800 font-medium">
              No credit card required
            </p>
          </main>
          <img
            src="/snipper-landing-page/Assets/Snippet Image.png"
            alt=""
            className="md:pt-12"
          />
        </div>
      </section>
      <section>
        <div className="lg:max-w-5xl container px-6 mx-auto">
          <main className="md:flex-row md:items-center xl:pt-16 flex flex-col justify-center gap-6 py-8">
            <div className="md:order-2 md:w-2/5 self-center">
              <img
                src="/snipper-landing-page/Assets/Customizable Image.png"
                alt=""
                className="sm:scale-100 scale-90"
              />
            </div>
            <div className="md:w-3/5 flex flex-col gap-4">
              <h2 className="lg:text-3xl text-2xl font-bold">
                A fully customizable code snippet editor
              </h2>
              <p className="text-neutral-800">
                Fully customise the color scheme of your code snippet, or use
                our own premade color schemes. Export your code snippet in JPG,
                PDF, PNG, or any of the other 10+ common extensions
              </p>
              <a
                href="#"
                className="bg-neutral-900 hover:bg-neutral-700 w-fit px-6 py-3 font-bold tracking-wide text-white rounded-md"
              >
                Get started
                <span className="text-zinc-400 font-normal">- it's free</span>
              </a>
            </div>
          </main>
          <footer className="sm:flex-row sm:justify-between sm:items-center md:pb-8 xl:pt-8 md:pt-0 flex flex-col justify-center pb-4">
            <a href="#">
              <img src="/snipper-landing-page/Assets/Logo.svg" alt="" />
            </a>
            <div className="flex flex-row gap-4 pt-2">
              <a href="#" className="text-neutral-800 font-medium">
                Terms and Conditions
              </a>
              <a href="#" className="text-neutral-800 font-medium">
                Privacy Policy
              </a>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default MainPage;
