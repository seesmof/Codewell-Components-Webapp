import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./components/Footer/Footer";

const MainPage = () => {
  return (
    <>
      <section className="w-full p-4 px-6 bg-black">
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
              src="/spense-landing-page/Assets/Hamburger Menu.svg"
              alt="Hamburger menu icon"
            />
          </a>
        </header>

        <main className="lg:flex-row lg:gap-24 md:items-center max-w-7xl container flex flex-col py-6 mx-auto">
          <img
            src="/spense-landing-page/Assets/Hero Image (Mobile).png"
            alt="image of monthly earnings"
            className="sm:hidden object-cover"
          />
          <img
            src="/spense-landing-page/Assets/Hero Image (Tablet).png"
            alt="image of monthly earnings"
            className="sm:block lg:hidden hidden object-cover"
          />
          <div className="lg:max-w-sm lg:order-2">
            <img
              src="/spense-landing-page/Assets/Hero Image (Desktop).png"
              alt="image of monthly earnings"
              className="lg:block hidden object-cover"
            />
          </div>

          <div className="sm:pt-8 lg:w-2/3 lg:order-1 flex flex-col space-y-2 pt-6">
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
                <img src="/spense-landing-page/Assets/Checkmark.svg" alt="" />
                Receive 99% of the earnings.
              </div>
              <div className="flex flex-row items-center gap-3">
                <img src="/spense-landing-page/Assets/Checkmark.svg" alt="" />
                Get paid via Debit Card, ACH, or PayPal
              </div>
              <div className="flex flex-row items-center gap-3">
                <img src="/spense-landing-page/Assets/Checkmark.svg" alt="" />
                Withdraw your earnings anytime.
              </div>
            </div>

            <div className="flex flex-row items-center pt-4 gap-2">
              <input
                type="email"
                placeholder="john@example.com"
                className="px-4 py-3 rounded-md border-neutral-400 border"
              />
              <button className="bg-black rounded-md px-4 py-3 text-white">
                Get Started
              </button>
            </div>
          </div>
        </main>
      </section>

      <section className="md:p-6 p-4 bg-white">
        <div className="max-w-7xl container mx-auto">
          <section className="grid items-center justify-center max-w-full grid-cols-3 gap-4 my-8 mb-12">
            <div className="col-span-1">
              <img
                src="/spense-landing-page/Assets/Facebook Logo.png"
                alt=""
                className=""
              />
            </div>
            <div className="col-span-1">
              <img
                src="/spense-landing-page/Assets/Dribbble Logo.png"
                alt=""
                className=""
              />
            </div>
            <div className="col-span-1">
              <img
                src="/spense-landing-page/Assets/Youtube Logo.png"
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
                Learn more about Escrow <BsArrowRight />
              </a>
            </div>
            <img
              src="/spense-landing-page/Assets/Phone Mockup (Mobile).png"
              alt=""
              className="w-full"
            />
          </section>

          <section className="flex flex-col py-12">
            <h2 className="text-3xl font-bold">A text editor like no other.</h2>
            <p className="sm:pt-4 text-stone-600 pt-3">
              Our text editor pulls you into focus mode with it's simplistic
              design and usability so you can put out your best writings.
            </p>
            <a
              href="#"
              className="text-stone-600 underline-offset-2 hover:text-stone-700 flex items-center gap-2 pt-3 text-lg font-medium tracking-wide underline capitalize duration-300"
            >
              text editor live demo <BsArrowRight />
            </a>
            <img
              src="/spense-landing-page/Assets/Text Editor.png"
              alt=""
              className="w-full pt-8 scale-105"
            />
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MainPage;
