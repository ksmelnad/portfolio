import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Github } from "./SVGs";

function Projects() {
  const myprojects = [
    {
      title: "Yogakshema Gurukulam",
      featured: true,
      liveUrl: "https://yogakshema.vercel.app",
      gitUrl: "https://github.com/ksmelnad/yogakshema-new",
      description: "E-learning platform",
      url: "yogakshema.vercel.app",
      image: "image",
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
      title: "IndicGPT",
      featured: true,
      liveUrl: "https://indicgpt.vercel.app",
      description: "ChatGPT for Indian Philosophical Texts",
      image: "image",
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
      title: "One Tennis",
      featured: true,
      liveUrl: "https://one-tennis.onrender.com",
      gitUrl: "https://github.com/ksmelnad/onetennis-mern-app",
      description: "Tennis e-commerce website (demo)",
      image: "image",
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
      title: "Sanskrit CMS",
      featured: true,
      liveUrl: "https://sanskrit-cms-frontend.onrender.com/",
      gitUrl: "https://github.com/ksmelnad/sanskrit-cms-frontend",
      description: "CMS for Sanskrit Texts Management",
      url: "sanskrit-cms.blender.app",
      image: "image",
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

      image: "image",
      techs: ["Java", "PHP"],
    },
  ];

  return (
    <section className="w-full">
      <div className="container max-w-2xl mx-auto px-4 py-4">
        <p id="projects" className="pt-7"></p>
        <h2 className="sectionTitle">Projects</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {myprojects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col py-5 space-y-3 px-2 bg-gray-200 shadow-sm dark:bg-slate-800/75 rounded"
            >
              {project.featured ? (
                <h3 className="text-sm text-teal-700 dark:text-teal-300">
                  Featured project
                </h3>
              ) : (
                <></>
              )}
              <div className="flex justify-between">
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

              <h4 className="text-sm">{project.description}</h4>

              <div className="flex flex-wrap gap-1 text-sm">
                {project.techs.map((tech, index) => (
                  <span
                    className="px-1 bg-gray-400 dark:bg-slate-600 rounded"
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
