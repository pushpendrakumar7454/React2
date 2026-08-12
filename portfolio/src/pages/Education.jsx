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

      // Top label
      tl.from(".education-top", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })

        // Main heading
        .from(
          ".education-heading",
          {
            y: 70,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=0.2"
        )

        // Description
        .from(
          ".education-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )

        // Education items
        .from(
          ".education-item",
          {
            x: 80,
            opacity: 0,
            duration: 0.7,
            stagger: 0.18,
            ease: "power3.out",
          },
          "-=0.2"
        );

      // Horizontal lines
      gsap.from(".education-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".education-list",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Hover animation
  useEffect(() => {
    const items = gsap.utils.toArray(".education-item");

    items.forEach((item) => {
      const number = item.querySelector(".education-number");
      const title = item.querySelector(".education-title");
      const arrow = item.querySelector(".education-arrow");

      const enter = () => {
        gsap.to(number, {
          x: 8,
          color: "#22d3ee",
          duration: 0.25,
          ease: "power2.out",
        });

        gsap.to(title, {
          x: 8,
          color: "#22d3ee",
          duration: 0.25,
          ease: "power2.out",
        });

        gsap.to(arrow, {
          x: 8,
          y: -4,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      const leave = () => {
        gsap.to(number, {
          x: 0,
          color: "",
          duration: 0.25,
        });

        gsap.to(title, {
          x: 0,
          color: "",
          duration: 0.25,
        });

        gsap.to(arrow, {
          x: 0,
          y: 0,
          duration: 0.25,
        });
      };

      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);

      return () => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", leave);
      };
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a0a0a] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* TOP */}
        <div className="education-top flex items-center gap-4">
         

          <span className="h-px w-10 bg-white/20" />

          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
            Education
          </p>
        </div>

        {/* HEADING */}
        <div className="mt-8">

          <h2 className="education-heading max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            MY
            <br />
            <span className="text-gray-600">
              EDUCATION.
            </span>
          </h2>

          <p className="education-description mt-7 max-w-lg text-sm leading-7 text-gray-500 md:text-base">
            My academic journey has given me the foundation to
            explore technology, programming and web development.
          </p>

        </div>

        {/* EDUCATION LIST */}
        <div className="education-list mt-16">

          {/* BCA */}
          <div className="education-item group border-t border-white/10 py-8">

            <div className="grid gap-6 md:grid-cols-[90px_1fr_150px] md:items-center">

              {/* Number */}
              <div>
                <span className="education-number text-sm text-gray-600">
                  01
                </span>
              </div>

              {/* Content */}
              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  Bachelor's Degree
                </p>

                <h3 className="education-title mt-2 text-2xl font-semibold md:text-3xl">
                  Bachelor of Computer Applications
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                  Currently pursuing BCA with a focus on programming,
                  web development and modern technologies.
                </p>

              </div>

              {/* Year */}
              <div className="flex items-center justify-between md:justify-end md:gap-5">

                <span className="text-sm text-gray-600">
                  2023 — 2026
                </span>

                <span className="education-arrow text-lg text-gray-600">
                  ↗
                </span>

              </div>

            </div>

            <div className="education-line mt-8 h-px bg-white/10" />

          </div>

          {/* 12TH */}
          <div className="education-item group border-b border-white/10 py-8">

            <div className="grid gap-6 md:grid-cols-[90px_1fr_150px] md:items-center">

              {/* Number */}
              <div>
                <span className="education-number text-sm text-gray-600">
                  02
                </span>
              </div>

              {/* Content */}
              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  Senior Secondary
                </p>

                <h3 className="education-title mt-2 text-2xl font-semibold md:text-3xl">
                  Intermediate
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                  Completed 12th standard from the Uttar Pradesh
                  Board.
                </p>

              </div>

              {/* Year */}
              <div className="flex items-center justify-between md:justify-end md:gap-5">

                <span className="text-sm text-gray-600">
                  2021
                </span>

                <span className="education-arrow text-lg text-gray-600">
                  ↗
                </span>

              </div>

            </div>

            <div className="education-line mt-8 h-px bg-white/10" />

          </div>

          {/* 10TH */}
          <div className="education-item group py-8">

            <div className="grid gap-6 md:grid-cols-[90px_1fr_150px] md:items-center">

              {/* Number */}
              <div>
                <span className="education-number text-sm text-gray-600">
                  03
                </span>
              </div>

              {/* Content */}
              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  Secondary School
                </p>

                <h3 className="education-title mt-2 text-2xl font-semibold md:text-3xl">
                  High School
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                  Completed 10th standard from the Uttar Pradesh
                  Board.
                </p>

              </div>

              {/* Year */}
              <div className="flex items-center justify-between md:justify-end md:gap-5">

                <span className="text-sm text-gray-600">
                  2019
                </span>

                <span className="education-arrow text-lg text-gray-600">
                  ↗
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;