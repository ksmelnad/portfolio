import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

function Experience() {
  return (
    <section className="w-full">
      <div className="container max-w-5xl mx-auto px-4 py-4">
        <p id="experience" className="pt-7"></p>
        <h2 className="sectionTitle">Experience</h2>
        <div>
          <div>
            <h3>
              <span className="text-teal-700 dark:text-teal-300 font-bold">
                Project Associate,
              </span>{" "}
              IIT Bombay, Mumbai, India
            </h3>
            <p>May, 2022&#8212;Present</p>
            <ul className="pl-5 pt-2 list-outside list-disc marker:text-teal-700 dark:marker:text-teal-300">
              <li className="">
                Developing a web application to render Sanskrit Literature with
                various functionalities using NLP techniques{" "}
              </li>
              <li>Tech: React, MongoDB, Django, Apache Solr </li>
            </ul>
          </div>
          <div className="pt-3">
            <p>
              <span className="text-teal-700 dark:text-teal-300 font-bold">
                {" "}
                Postdoctoral Fellow,
              </span>{" "}
              IIT Gandhinagar, Gujarat, India
            </p>
            <p>October, 2020&#8212;December, 2021</p>
            <ul className="pl-5 pt-2 list-outside list-disc marker:text-teal-700 dark:marker:text-teal-300">
              <li>
                Along with my research on History of Astronomy and Mathematics,
                I mentored four B.Tech. students in building a web application,{" "}
                <a
                  href="https://students.iitgn.ac.in/homi-project"
                  target="_blank"
                  className="text-blue-400 font-semibold hover:underline"
                >
                  {" "}
                  INDEA
                  <ArrowTopRightOnSquareIcon className="ml-1 w-4 h-4 inline-block -translate-y-0.5" />
                </a>
                , which decodes and encodes ancient Indian numerical systems.
              </li>
              <li>Tech: Python, Flask, JavaScript, CSS, HTML</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
