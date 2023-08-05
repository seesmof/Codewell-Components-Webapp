import FooterSection from "./FooterSection";

const Footer = () => {
  const footerSections = [
    {
      heading: "Company",
      links: ["About", "Customers", "Blog"],
    },
    {
      heading: "Opportunities",
      links: ["Jobs", "Internships"],
    },
    {
      heading: "Sitemap",
      links: ["Privacy Policy", "Terms of Service", "Homepage"],
    },
    {
      heading: "Resources",
      links: ["Support", "Contact", "FAQ"],
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between mx-auto max-w-6xl">
        <div className="flex flex-col gap-2 max-w-md">
          <strong className="font-medium text-white">spense.</strong>
          <p>
            Spense is an open platform for individuals to share their unfiltered
            thoughts. Discuss the topics you love, and get paid for doing{" "}
            <em className="italic pr-1">just</em>
            that.
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-1 lg:grid-rows-1 lg:grid-flow-col py-8 gap-6">
          {footerSections.map((section) => (
            <FooterSection key={section.heading} {...section} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
