import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Github } from "./SVGs";

function Projects() {
  const myprojects = [
    {
      title: "Wise Arcade",
      featured: true,
      liveUrl: "https://wisearcade.com",
      // gitUrl: "",
      description: "Fun and Educational Activities for Kids",
      url: "wisearcade.com",
      src: "/wisearcadeHomePage.png",
      techs: [
        "Next",
        "React",
        "ReCharts",
        "Stripe",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "OpenAI API",
        "Pinecone",
        "Git",
        "Github",
        "Vercel",
      ],
    },
    {
      title: "Enlighten Guru",
      featured: true,
      liveUrl: "https://enlightenguru.vercel.app",
      // gitUrl: "https://github.com/ksmelnad/yogakshema-new",
      description: "E-learning platform",
      url: "enlightenguru.org",
      src: "/enlightenguruHomepage.png",
      techs: [
        "Next",
        "React",
        "Stripe",
        "Sanity",
        "Firebase",
        "TailwindCSS",
        "OpenAI API",
        "Pinecone",
        "Git",
        "Github",
        "Vercel",
      ],
    },
    {
      title: "Yogakshema Gurukulam",
      featured: true,
      liveUrl: "https://yogakshema.vercel.app",
      gitUrl: "https://github.com/ksmelnad/yogakshema-new",
      description: "E-learning platform",
      url: "yogakshema.vercel.app",
      src: "/yogakshemaHomePage.png",
      techs: [
        "Next",
        "React",
        "Sanity",
        "TailwindCSS",
        "Git",
        "Github",
        "Vercel",
      ],
    },

    {
      title: "One Tennis",
      featured: true,
      liveUrl: "https://one-tennis.onrender.com",
      gitUrl: "https://github.com/ksmelnad/onetennis-mern-app",
      description: "Tennis e-commerce website (demo)",
      src: "/onetennisHomePage.png",
      techs: [
        "React",
        "Redux",
        "CSS",
        "MongoDb",
        "Express",
        "Node",
        "Git",
        "Github",
        "Render",
      ],
    },
    {
      title: "IndicGPT",
      featured: false,
      liveUrl: "https://indicgpt.vercel.app",
      description: "ChatGPT for Indian Philosophical Texts",
      src: "/IndicGPTHomePage.png",
      techs: [
        "Next",
        "React",
        "TailwindCss",
        "Firebase",
        "Stripe",
        "Git",
        "Github",
        "Vercel",
      ],
    },
    {
      title: "Sanskrit CMS",
      featured: false,
      liveUrl: "https://sanskrit-cms-frontend.onrender.com/",
      gitUrl: "https://github.com/ksmelnad/sanskrit-cms-frontend",
      description: "CMS for Sanskrit Texts Management",
      url: "sanskrit-cms.blender.app",
      src: "",
      techs: [
        "React",
        "Redux",
        "CSS",
        "MongoDb",
        "Express",
        "Node",
        "Git",
        "Github",
        "Render",
      ],
    },

    {
      title: "Meter Identifying Tool",
      featured: false,
      liveUrl: "http://sanskritlibrary.org:8080/MeterIdentification/",

      description: "A web application for deciphering Sanskrit prosody",

      src: "",
      techs: ["Java", "PHP"],
    },
  ];

  return (
    <section className="w-full">
      <div className="container max-w-5xl mx-auto px-4 py-4">
        <p id="projects" className="pt-7"></p>
        <h2 className="sectionTitle">Projects</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {myprojects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col py-4 max-w-md 
              space-y-3 px-4 bg-white 
              shadow-lg border dark:bg-slate-800/75 
              rounded 
              hover:shadow-xl
              hover:dark:bg-slate-700/75 
              hover:bg-gray-50
              dark:border-slate-700/50
              transition duration-300 ease-in-out"
            >
              {project.featured && (
                <h3 className="text-sm text-teal-700 dark:text-teal-300">
                  Featured project
                </h3>
              )}
              {project.src && (
                <div>
                  <Image
                    src={project.src}
                    alt="Yogakshema Project Image"
                    width={300}
                    height={300}
                  />
                </div>
              )}
              <div className="pt-4 flex justify-between">
                <div>
                  <h3 className="text-md font-bold">{project.title}</h3>
                </div>
                <div className="flex gap-2 items-center">
                  {project.gitUrl && (
                    <a href={project.gitUrl} target="_blank">
                      <Github />
                    </a>
                  )}
                  <a href={project.liveUrl} target="_blank">
                    <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <h4 className="text-sm ">{project.description}</h4>

              <div className="flex flex-wrap gap-1">
                {project.techs.map((tech, index) => (
                  <span
                    className="px-2 py-1 text-xs bg-gray-200 dark:bg-slate-700 rounded"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
