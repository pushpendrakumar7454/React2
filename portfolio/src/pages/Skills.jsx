
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  const skills = [
    "HTML",
    "CSS",
    "javaScript",
    "typeScript",
    "React",
    "Tailwind CSS",
    "Redux",
    "Python",
    "Django",
    "GSAP"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".skills-heading", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".skill-card",
        {
          y: 35,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a0a0a] px-4 py-16 text-white sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="skills-heading mb-10 sm:mb-12">
          <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-400 sm:text-xs sm:tracking-[0.3em]">
             Skills
          </p>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-5">
            <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              My <span className="text-gray-600">Stack.</span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              Technologies I use to build responsive and modern
              web applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4 md:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="skill-card group rounded-xl border border-white/10 p-4 transition-colors duration-300 hover:border-cyan-400/50 sm:p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-600 sm:text-xs">
                  0{index + 1}
                </span>

                <span
                  className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                >
                  ↗
                </span>
              </div>

              <h3 className="mt-6 text-base font-medium transition-colors duration-300 group-hover:text-cyan-400 sm:mt-8 sm:text-xl">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
