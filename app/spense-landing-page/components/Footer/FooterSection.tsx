interface FooterProps {
  heading: string;
  links: string[];
}

const FooterSection = ({ heading, links }: FooterProps) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <strong className="font-medium text-white">{heading}</strong>
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="hover:underline underline-offset-2 font-medium capitalize"
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default FooterSection;
