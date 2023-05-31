import { Github, Linkedin } from "./SVGs";

function Hero() {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center px-4 space-y-5">
          <h4 className="text-teal-700  dark:text-teal-300 font-semibold">
            Hi, this is
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-slate-200 ">
            Keshav Melnad
          </h2>
          <h3 className="text-xl text-gray-700 dark:text-slate-400">
            I'm a Full Stack Web Developer
          </h3>
          <p className="pt-2 md:pt-6 text-gray-700 dark:text-slate-400">
            Experienced in <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong>, <strong>Python</strong>. Proficient in{" "}
            <strong>React.js</strong>, <strong>Next.js</strong>. Strong
            understanding of back-end technologies such as{" "}
            <strong>Node.js</strong> and <strong>Express.js</strong>. Passionate{" "}
            about creating beautiful and user-friendly websites.
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
      </div>
    </section>
  );
}

export default Hero;
