
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  const projects = [
    {
      number: "01",
      title: "StartupHub",
      tech: "React · Django · Redux",
      description:
        "A platform where startups, developers and investors can connect and build ideas together.",
      visual: "STARTUP",
    },
    {
      number: "02",
      title: "E-Commerce",
      tech: "React · API · Tailwind",
      description:
        "A product application with search, filtering, categories and dynamic API data.",
      visual: "STORE",
    },
    {
      number: "03",
      title: "Creative UI",
      tech: "React · GSAP · Tailwind",
      description:
        "An interactive interface focused on smooth motion and modern user experience.",
      visual: "CREATIVE",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-heading", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 80%",
        },
      });

      gsap.from(".project-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-list",
          start: "top 80%",
        },
      });

      gsap.from(".project-visual", {
        scale: 0.85,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-list",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a0a0a] px-4 py-16 text-white sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="projects-heading mb-12 sm:mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 sm:text-xs sm:tracking-[0.35em]">
            04 / Projects
          </p>

          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              MY <span className="text-gray-600">PROJECTS.</span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              A few projects where I applied what I've learned
              and experimented with new ideas.
            </p>
          </div>
        </div>

        <div className="project-list space-y-8 sm:space-y-10">
          {projects.map((project) => (
            <div
              key={project.number}
              className="project-card group grid grid-cols-1 gap-7 border-t border-white/10 pt-6 md:grid-cols-[1fr_1.1fr] md:gap-8"
            >
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-[10px] text-gray-600 sm:text-xs">
                    {project.number}
                  </span>

                  <span className="text-[10px] uppercase tracking-wider text-cyan-400 sm:text-xs">
                    Project
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold transition-colors duration-300 group-hover:text-cyan-400 sm:mt-4 sm:text-3xl md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs text-gray-500 sm:mt-3">
                  {project.tech}
                </p>

                <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 sm:mt-4">
                  {project.description}
                </p>

                <button
                  className="mt-5 w-fit border-b border-gray-700 pb-1 text-sm text-gray-400 transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-400 sm:mt-6"
                >
                  View Project ↗
                </button>
              </div>

              <div
                className="project-visual relative h-52 overflow-hidden rounded-2xl border border-white/10 bg-[#141414] sm:h-60 md:h-72"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[9px] uppercase tracking-[0.35em] text-gray-600 sm:text-[10px] sm:tracking-[0.4em]">
                      {project.number}
                    </p>

                    <h4 className="mt-2 text-3xl font-black transition-transform duration-500 group-hover:scale-105 sm:text-4xl md:text-5xl">
                      {project.visual}
                      <span className="text-cyan-400">.</span>
                    </h4>
                  </div>
                </div>

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-700 group-hover:scale-150 sm:h-48 sm:w-48" />

                <span className="absolute bottom-3 right-4 text-[10px] text-gray-600 sm:bottom-4 sm:right-5 sm:text-xs">
                  {project.number} / 03
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

