import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Redux",
    "Python",
    "Django",
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
      className="bg-[#0a0a0a] text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="skills-heading mb-12">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            03 / Skills
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mt-4">

            <h2 className="text-5xl md:text-6xl font-bold">
              My <span className="text-gray-600">Stack.</span>
            </h2>

            <p className="text-sm text-gray-500 max-w-sm leading-6">
              Technologies I use to build responsive and modern
              web applications.
            </p>

          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {skills.map((skill, index) => (
            <div
              key={skill}
              className="skill-card group border border-white/10 rounded-xl p-5
              hover:border-cyan-400/50 transition-colors duration-300"
            >
              <div className="flex items-center justify-between">

                <span className="text-xs text-gray-600">
                  0{index + 1}
                </span>

                <span className="text-gray-600 group-hover:text-cyan-400
                  group-hover:translate-x-1 group-hover:-translate-y-1
                  transition-all duration-300">
                  ↗
                </span>

              </div>

              <h3 className="mt-8 text-xl font-medium
                group-hover:text-cyan-400 transition-colors duration-300">
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