import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".about-top", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".about-heading",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          ".about-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".about-skill",
          {
            x: 50,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    // Skill hover
    const skills = gsap.utils.toArray(".about-skill");

    skills.forEach((skill) => {
      const name = skill.querySelector(".skill-name");
      const arrow = skill.querySelector(".skill-arrow");

      skill.addEventListener("mouseenter", () => {
        gsap.to(name, {
          x: 8,
          color: "#22d3ee",
          duration: 0.25,
          ease: "power2.out",
        });

        gsap.to(arrow, {
          x: 5,
          duration: 0.25,
        });
      });

      skill.addEventListener("mouseleave", () => {
        gsap.to(name, {
          x: 0,
          color: "",
          duration: 0.25,
        });

        gsap.to(arrow, {
          x: 0,
          duration: 0.25,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a0a0a] px-6 py-24 text-white" >
      <div className="mx-auto max-w-6xl">

        {/* Top */}
        <div className="about-top flex items-center gap-4">
          <span className="text-sm text-gray-600">
            02
          </span>

          <span className="h-px w-10 bg-white/20" />

          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-14 md:grid-cols-[1.3fr_0.7fr]">

          {/* Left */}
          <div>

            <h2 className="about-heading max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              I build{" "}
              <span className="text-gray-600">
                modern
              </span>{" "}
              and interactive web experiences.
            </h2>

            <div className="about-description mt-7 max-w-2xl space-y-4 text-sm leading-7 text-gray-500 md:text-base">
              <p>
                I'm a frontend developer who enjoys turning ideas
                into clean, responsive and interactive interfaces.
              </p>

              <p>
                I work mainly with React and modern frontend
                technologies, and I use GSAP to add smooth,
                meaningful motion to my projects.
              </p>

              <button className="mt-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-gray-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400">
                My Journey →
              </button>
            </div>

          </div>

          {/* Right */}
          <div>

            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gray-600">
              Technologies
            </p>

            <div className="border-t border-white/10">

              <div className="about-skill flex cursor-pointer items-center justify-between border-b border-white/10 py-4">
                <span className="text-xs text-gray-600">01</span>
                <span className="skill-name text-sm text-gray-400">
                  React.js
                </span>
                <span className="skill-arrow text-gray-600">↗</span>
              </div>

              <div className="about-skill flex cursor-pointer items-center justify-between border-b border-white/10 py-4">
                <span className="text-xs text-gray-600">02</span>
                <span className="skill-name text-sm text-gray-400">
                  JavaScript
                </span>
                <span className="skill-arrow text-gray-600">↗</span>
              </div>

              <div className="about-skill flex cursor-pointer items-center justify-between border-b border-white/10 py-4">
                <span className="text-xs text-gray-600">03</span>
                <span className="skill-name text-sm text-gray-400">
                  Tailwind CSS
                </span>
                <span className="skill-arrow text-gray-600">↗</span>
              </div>

              <div className="about-skill flex cursor-pointer items-center justify-between border-b border-white/10 py-4">
                <span className="text-xs text-gray-600">04</span>
                <span className="skill-name text-sm text-gray-400">
                  GSAP
                </span>
                <span className="skill-arrow text-gray-600">↗</span>
              </div>

              <div className="about-skill flex cursor-pointer items-center justify-between border-b border-white/10 py-4">
                <span className="text-xs text-gray-600">05</span>
                <span className="skill-name text-sm text-gray-400">
                  Git & GitHub
                </span>
                <span className="skill-arrow text-gray-600">↗</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;