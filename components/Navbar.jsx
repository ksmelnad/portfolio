"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("light");

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-slate-900 py-3">
      <nav className="container mx-auto px-4 py-2">
        <ul className="flex items-center justify-end space-x-5 md:space-x-10 text-sm">
          <li>
            <a className="navItem" href="#projects">
              {" "}
              Projects{" "}
            </a>{" "}
          </li>
          <li>
            <a className="navItem" href="#experience">
              Experience{" "}
            </a>{" "}
          </li>
          <li>
            <a className="navItem" href="#education">
              Education
            </a>
          </li>
          <li>
            <a className="navItem" href="#contact">
              Contact{" "}
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                setTheme(
                  theme === "light" || theme === "system" ? "dark" : "light"
                );
              }}
            >
              {theme === "light" || theme === "system" ? (
                <MoonIcon className="w-6 h-6 pt-2 text-gray-600" />
              ) : (
                <SunIcon className="w-6 h-6 pt-2 text-white" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
