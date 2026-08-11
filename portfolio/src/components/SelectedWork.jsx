
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SelectedWork = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-heading", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".work-heading",
          start: "top 80%",
        },
      });

      gsap.utils.toArray(".project-card").forEach((project) => {
        const image = project.querySelector(".project-image");
        const content = project.querySelector(".project-content");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: project,
            start: "top 75%",
          },
        });

        tl.from(image, {
          y: 60,
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        }).from(
          content.children,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.6"
        );
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
        <div className="work-heading mb-12 sm:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
            02 / Selected Work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl md:text-7xl">
            SELECTED{" "}
            <span className="text-gray-600">
              WORK.
            </span>
          </h2>

          <p className="mt-4 max-w-md text-sm leading-6 text-gray-500 sm:mt-5 sm:text-base sm:leading-7">
            A few projects I've built while exploring
            modern web development.
          </p>
        </div>

        <div className="project-card border-t border-white/10 py-10 sm:py-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">
            <div className="project-content">
              <p className="mb-3 text-xs text-cyan-400 sm:text-sm">
                React · Django · Redux
              </p>

              <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                StartupHub
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-gray-500 sm:mt-5 sm:text-base sm:leading-7">
                A platform where startups, developers and investors
                can connect and build ideas together.
              </p>

              <button className="mt-5 text-sm transition hover:text-cyan-400 sm:mt-6">
                View Project →
              </button>
            </div>

            <div className="project-image group flex h-56 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#151515] sm:h-64 md:h-72">
              <div className="text-center transition-transform duration-500 group-hover:scale-110">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600 sm:text-xs sm:tracking-[0.3em]">
                  Project 01
                </p>

                <h4 className="mt-2 text-4xl font-bold sm:mt-3 sm:text-5xl">
                  Startup<span className="text-cyan-400">Hub.</span>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card border-t border-white/10 py-10 sm:py-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">
            <div className="project-image group flex h-56 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#151515] sm:h-64 md:h-72 md:order-1">
              <div className="text-center transition-transform duration-500 group-hover:scale-110">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600 sm:text-xs sm:tracking-[0.3em]">
                  Project 02
                </p>

                <h4 className="mt-2 text-4xl font-bold sm:mt-3 sm:text-5xl">
                  Store<span className="text-cyan-400">.</span>
                </h4>
              </div>
            </div>

            <div className="project-content md:order-2">
              <p className="mb-3 text-xs text-cyan-400 sm:text-sm">
                React · API · Tailwind
              </p>

              <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                E-Commerce
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-gray-500 sm:mt-5 sm:text-base sm:leading-7">
                A responsive product application with search,
                filtering and category based products.
              </p>

              <button className="mt-5 text-sm transition hover:text-cyan-400 sm:mt-6">
                View Project →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
