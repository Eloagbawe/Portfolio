"use client";
import Projects from "@/components/Projects/Projects";
import Link from "next/link";
import Skills from "@/components/Skills/Skills";
import Image from "next/image";
import { useThemeContext } from "@/contexts/themeContext";

export default function Home() {
  const { theme, addDarkMode, addLightMode } = useThemeContext();
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <main className="md:flex gap-4 md:h-[100vh] md:overflow-hidden">
      <section className="bio flex justify-center pt-8 md:h-[100vh] md:w-[48%]">
        <div className="px-5 md:px-8 pb-4 lg:px-16">
          <div className="py-2 h-[3rem] md:h-[5rem]">
            {theme && (
              <>
                {theme === 'light' && <button onClick={addDarkMode}>
                  <Image
                    src={"/dark_mode.svg"}
                    alt="dark mode icon"
                    width={24}
                    height={24}
                  />
                </button>}
                {theme === 'dark' && <button onClick={addLightMode}>
                  <Image
                    src={"/light_mode.svg"}
                    alt="dark mode icon"
                    width={24}
                    height={24}
                  />
                </button>}
              </>
            )}
          </div>
          <h1 className="bio__intro pt-5 md:pt-16">Hi, I am Elo Idiodi. 👋🏾</h1>
          <p className="bio__text my-8">
            I am a <span className="bio__text--highlight">dedicated</span>{" "}
            fullstack web developer who has successfully transitioned from a
            career in optometry to software development. My journey from
            healthcare to technology has been driven by a deep-seated{" "}
            <span className="bio__text--highlight">passion</span> for{" "}
            <span className="bio__text--highlight">problem-solving</span> and{" "}
            <span className="bio__text--highlight">innovation</span>. Over the
            past few years, I have worked as a frontend web developer, creating
            engaging and user friendly web applications.
          </p>
          <div className="skills">
            <Skills />
          </div>
          <ul className="flex gap-3 bio__links mt-8 mb-2">
            <li className="bio__link">
              <a href="https://github.com/Eloagbawe" target="_blank">
                Github
              </a>
            </li>

            <li className="bio__link">
              <a href="https://www.linkedin.com/in/elo-idiodi/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li className="bio__link">
              <a href="mailto:elo.idiodi@gmail.com" target="_blank">
                Email
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="content md:h-[100vh] md:w-[48%] overflow-scroll">
        <div className="pt-4 pb-8 px-5 md:p-8">
          <div className="content__nav md:mx-3">
            <Link href="/" className="content__title content__title--active">
              Projects
            </Link>
          </div>
          <Projects />
        </div>
      </section>
    </main>
  );
}
