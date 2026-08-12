import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".education-heading", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      }).from(
        ".education-card",
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
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
      className="bg-[#0a0a0a] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="education-heading mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            05 / Education
          </p>

          <h2 className="mt-4 text-5xl font-bold md:text-6xl">
            MY <span className="text-gray-600">EDUCATION.</span>
          </h2>
        </div>

        {/* Education Card */}
        <div className="education-card border-t border-white/10 py-8">

          <div className="grid gap-6 md:grid-cols-[120px_1fr_auto] md:items-center">

            <span className="text-sm text-gray-600">
              01
            </span>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                Bachelor's Degree
              </p>

              <h3 className="mt-2 text-3xl font-semibold">
                Bachelor of Computer Applications
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                BCA · Final Year
              </p>
            </div>

            <div className="text-sm text-gray-500 md:text-right">
              2023 — 2026
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;