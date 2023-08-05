import React from "react";

const MainPage = () => {
  return (
    <>
      <section className="w-full p-4 bg-black">
        <div className="font-medium text-center text-white">
          🎉 To celebrate Spense's launch, we will be waiving all fees for the
          entire month of April.
          <a href="#" className="underline-offset-2 decoration-white underline">
            You will be receiving 100% of the earnings.
          </a>
          🎉
        </div>
      </section>

      <section className="bg-zinc-100 md:p-6 lg:pb-12 p-4">
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
              src="/spense-landing-page/Hamburger Menu.svg"
              alt="Hamburger menu icon"
            />
          </a>
        </header>

        <main className="lg:flex-row lg:gap-24 md:items-center max-w-7xl container flex flex-col pt-6 mx-auto">
          <img
            src="/spense-landing-page/Hero Image (Mobile).png"
            alt="image of monthly earnings"
            className="sm:hidden object-cover"
          />
          <img
            src="/spense-landing-page/Hero Image (Tablet).png"
            alt="image of monthly earnings"
            className="sm:block lg:hidden hidden object-cover"
          />
          <div className="lg:max-w-sm lg:order-2">
            <img
              src="/spense-landing-page/Hero Image (Desktop).png"
              alt="image of monthly earnings"
              className="lg:block hidden object-cover"
            />
          </div>

          <div className="sm:pt-8 lg:w-2/3 lg:order-1 flex flex-col pt-6">
            <h1 className="sm:text-4xl lg:text-6xl lg:max-w-full md:text-5xl sm:max-w-md text-2xl font-bold">
              Share your unfiltered thoughts. Get paid.
            </h1>
            <p className="text-stone-600 sm:pt-4 lg:text-lg pt-3">
              Spense is an open platform for individuals to share their
              unfiltered thoughts. Discuss the topics you love, and get paid for
              doing
              <span className="italic">just</span> that.
            </p>
            <div className="sm:pt-4 text-stone-600 flex flex-col gap-2 pt-3 font-medium">
              <div className="flex flex-row items-center gap-3">
                <img src="/spense-landing-page/Checkmark.svg" alt="" />
                Receive 99% of the earnings.
              </div>
              <div className="flex flex-row items-center gap-3">
                <img src="/spense-landing-page/Checkmark.svg" alt="" />
                Get paid via Debit Card, ACH, or PayPal
              </div>
              <div className="flex flex-row items-center gap-3">
                <img src="/spense-landing-page/Checkmark.svg" alt="" />
                Withdraw your earnings anytime.
              </div>
            </div>

            <div className="flex flex-row gap-3 pt-5">
              <input
                type="email"
                className="rounded px-4 py-2 sm:py-3 focus:outline-0 focus:outline-none focus:ring-gray-600 focus:ring-1 border-gray-400 focus:border-gray-600 max-w-[11rem]"
                name="email"
                placeholder="john@example.com"
              />
              <a
                href="#"
                className="bg-black text-white font-medium rounded px-4 py-2 hover:bg-neutral-800 duration-300 sm:py-3 sm:px-5"
              >
                Get Started
              </a>
            </div>
          </div>
        </main>
      </section>

      <section className="md:p-6 p-4 bg-white">
        <div className="max-w-7xl container mx-auto">
          <section className="grid items-center justify-center max-w-full grid-cols-3 gap-4 my-8 mb-12">
            <div className="col-span-1">
              <img
                src="/spense-landing-page/Facebook Logo.png"
                alt=""
                className=""
              />
            </div>
            <div className="col-span-1">
              <img
                src="/spense-landing-page/Dribbble Logo.png"
                alt=""
                className=""
              />
            </div>
            <div className="col-span-1">
              <img
                src="/spense-landing-page/Youtube Logo.png"
                alt=""
                className=""
              />
            </div>
          </section>

          <section className="bg-zinc-100 rounded-xl">
            <div className="flex flex-col px-8 pt-8">
              <h2 className="font-bold text-3xl max-w-[14rem]">
                Secure your money with Escrow.
              </h2>
              <p className="sm:pt-4 text-stone-600 pt-3 text-lg">
                Spense uses Escrow to secure all payments. We believe Escrow
                offers the highest level of security for your payments, so you
                never need to worry about scams.
              </p>
              <a
                href="#"
                className="text-stone-600 underline-offset-2 hover:text-stone-700 flex items-center gap-1 pt-3 text-lg font-medium underline duration-300"
              >
                Learn more about Escrow
                <i className="bi bi-arrow-right text-sm"></i>
              </a>
            </div>
            <img
              src="/spense-landing-page/Phone Mockup (Mobile).png"
              alt=""
              className="w-full"
            />
          </section>

          <section className="flex flex-col py-6">
            <h2 className="text-4xl font-bold">A text editor like no other.</h2>
            <p className="sm:pt-4 text-stone-600 pt-3 text-lg">
              Our text editor pulls you into focus mode with it's simplistic
              design and usability so you can put out your best writings.
            </p>
            <a
              href="#"
              className="text-stone-600 underline-offset-2 hover:text-stone-700 flex items-center gap-2 pt-3 text-lg font-medium tracking-wide underline capitalize duration-300"
            >
              text editor live demo
              <i className="bi bi-arrow-right text-sm"></i>
            </a>
            <img
              src="/spense-landing-page/Text Editor.png"
              alt=""
              className="w-full pt-8 scale-105"
            />
          </section>
        </div>
      </section>

      <footer className="md:p-6 p-4 text-white bg-black">
        <div className="max-w-7xl container flex flex-col items-start justify-between py-8 mx-auto">
          <section className="flex flex-col gap-2">
            <h2 className="hover:text-neutral-200 text-lg font-medium duration-300">
              spense.
            </h2>
            <p className="text-neutral-400">
              Spense is an open platform for individuals to share their
              unfiltered thoughts. Discuss the topic you love, and get paid for
              doing
              <span className="italic">just</span> that.
            </p>
          </section>

          <section className="gap-y-8 grid justify-between w-full grid-cols-2 pt-8">
            <article className="flex flex-col col-span-1 gap-3">
              <h2 className="hover:text-neutral-200 text-lg font-medium capitalize duration-300">
                company
              </h2>
              <div className="text-neutral-400 flex flex-col gap-2 capitalize">
                <a href="#" className="hover:text-neutral-200 duration-300">
                  about
                </a>
                <a href="#" className="hover:text-neutral-200 duration-300">
                  customers
                </a>
                <a href="#" className="hover:text-neutral-200 duration-300">
                  blog
                </a>
              </div>
            </article>

            <article className="flex flex-col col-span-1 gap-3">
              <h2 className="hover:text-neutral-200 text-lg font-medium capitalize duration-300">
                opportunities
              </h2>
              <div className="text-neutral-400 flex flex-col gap-2 capitalize">
                <a href="#" className="hover:text-neutral-200 duration-300">
                  jobs
                </a>
              </div>
            </article>

            <article className="flex flex-col col-span-1 gap-3">
              <h2 className="hover:text-neutral-200 text-lg font-medium capitalize duration-300">
                sitemap
              </h2>
              <div className="text-neutral-400 flex flex-col gap-2 capitalize">
                <a href="#" className="hover:text-neutral-200 duration-300">
                  homepage
                </a>
              </div>
            </article>

            <article className="flex flex-col col-span-1 gap-3">
              <h2 className="hover:text-neutral-200 text-lg font-medium capitalize duration-300">
                resources
              </h2>
              <div className="text-neutral-400 flex flex-col gap-2 capitalize">
                <a href="#" className="hover:text-neutral-200 duration-300">
                  support
                </a>
                <a href="#" className="hover:text-neutral-200 duration-300">
                  contact
                </a>
                <a href="#" className="hover:text-neutral-200 duration-300">
                  FAQ
                </a>
              </div>
            </article>
          </section>
        </div>
      </footer>
    </>
  );
};

export default MainPage;
