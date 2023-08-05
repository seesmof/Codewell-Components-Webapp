import Gallery from "@/components/Gallery";

export default function Home() {
  const Projects = [
    {
      name: "Snipper",
      link: "/snipper-landing-page",
    },
    {
      name: "Spense",
      link: "/spense-landing-page",
    },
  ];

  return (
    <>
      <Gallery Projects={Projects} projectName="Codewell" />
    </>
  );
}
