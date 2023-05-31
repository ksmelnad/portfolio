import React from "react";
import { Github, Linkedin } from "./SVGs";

function Contact() {
  return (
    <section className="w-full pb-10">
      <div className="container max-w-5xl mx-auto px-4 py-4 flex flex-col space-y-4">
        <p id="contact" className="pt-7"></p>
        <h2 className="sectionTitle">Contact</h2>
        <div className="flex space-x-3 items-center">
          <a href="https://github.com/ksmelnad" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/keshavmelnad/" target="_blank">
            <Linkedin />
          </a>
        </div>

        <p>You could reach me through LinkedIn message or through email</p>
        <button className="px-3 py-2 border border-solid rounded w-[120px] hover:dark:border-teal-300 text-teal-700 hover:border-teal-700 dark:text-teal-300">
          <a href="mailto: keshav.s.m@gmail.com">Send Email</a>
        </button>
      </div>
    </section>
  );
}

export default Contact;
