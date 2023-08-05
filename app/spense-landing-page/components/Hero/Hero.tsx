import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <section className="bg-zinc-100 md:p-6 lg:pb-12 p-4">
        <Navbar />

        <div className="lg:flex-row lg:gap-24 md:items-center max-w-7xl container flex flex-col py-6 mx-auto">
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
        </div>
      </section>
    </>
  );
};

export default Hero;
