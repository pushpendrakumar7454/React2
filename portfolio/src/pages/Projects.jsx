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
      // Heading
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

      // Cards
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

      // Project visual
      gsap.from(".project-visual", {
        scale: 0.85,
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
      className="bg-[#0a0a0a] text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="projects-heading mb-14">

          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
            04 / Projects
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mt-4">

            <h2 className="text-5xl md:text-6xl font-bold">
              MY <span className="text-gray-600">PROJECTS.</span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              A few projects where I applied what I've learned
              and experimented with new ideas.
            </p>

          </div>
        </div>

        {/* Project List */}
        <div className="project-list space-y-6">

          {projects.map((project) => (
            <div
              key={project.number}
              className="project-card group grid md:grid-cols-[1fr_1.1fr] gap-8
              border-t border-white/10 pt-6"
            >

              {/* Info */}
              <div className="flex flex-col justify-center">

                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-600">
                    {project.number}
                  </span>

                  <span className="text-xs text-cyan-400 uppercase tracking-wider">
                    Project
                  </span>
                </div>

                <h3 className="mt-4 text-3xl md:text-4xl font-bold
                  group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs text-gray-500">
                  {project.tech}
                </p>

                <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
                  {project.description}
                </p>

                <button
                  className="mt-6 w-fit text-sm text-gray-400
                  border-b border-gray-700 pb-1
                  hover:text-cyan-400 hover:border-cyan-400
                  transition-colors duration-300"
                >
                  View Project ↗
                </button>

              </div>

              {/* Visual */}
              <div
                className="project-visual relative h-64 md:h-72
                rounded-2xl overflow-hidden
                border border-white/10 bg-[#141414]"
              >

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600">
                      {project.number}
                    </p>

                    <h4 className="mt-2 text-4xl md:text-5xl font-black
                      group-hover:scale-105 transition-transform duration-500">
                      {project.visual}
                      <span className="text-cyan-400">.</span>
                    </h4>
                  </div>

                </div>

                {/* Simple Glow */}
                <div
                  className="absolute -right-16 -top-16
                  h-48 w-48 rounded-full
                  bg-cyan-400/10 blur-3xl
                  group-hover:scale-150
                  transition-transform duration-700"
                />

                <span className="absolute bottom-4 right-5 text-xs text-gray-600">
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