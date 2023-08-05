import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

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

      <Hero />

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

      <footer className="bg-black text-white/60 py-12 px-4 lg:px-6">
        <Footer />
      </footer>
    </>
  );
};

export default MainPage;
