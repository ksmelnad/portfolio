import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Educatoin from "@/components/Education";
import Contact from "@/components/Contact";

function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="dark:bg-slate-900 dark:text-slate-300">
        <Hero />
        <Projects />
        <Experience />
        <Educatoin />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
