import React from "react";
import { Github, Linkedin } from "./SVGs";

function Hero() {
  return (
    <section className="w-full">
      <div className="container min-h-screen mx-auto flex flex-col items-center justify-center px-4 space-y-5">
        <h4 className="text-sm text-teal-700  dark:text-teal-300">
          Hi, this is
        </h4>
        <h2 className="text-5xl font-bold md:text-5xl text-gray-800 dark:text-slate-200 ">
          Keshav Melnad
        </h2>
        <h3 className="text-xl text-gray-700 dark:text-slate-400">
          I'm a Full Stack Web Developer
        </h3>
        <p className="pt-6 text-gray-700 dark:text-slate-400 text-center">
          Experienced in HTML, CSS, and JavaScript, Python <br />
          Proficient in React.js, Next,js <br />
          Strong understanding of back-end technologies such as Node.js and
          Express.js <br />
          Passionate about creating beautiful and user-friendly websites
        </p>

        <div className="flex space-x-3 items-center">
          <a href="https://github.com/ksmelnad" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/keshavmelnad/" target="_blank">
            <Linkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
