import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SelectedWork = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
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

      // Projects
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
      className="bg-[#0a0a0a] text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="work-heading mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
            02 / Selected Work
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            SELECTED{" "}
            <span className="text-gray-600">
              WORK.
            </span>
          </h2>

          <p className="mt-5 max-w-md text-gray-500 leading-7">
            A few projects I've built while exploring
            modern web development.
          </p>
        </div>

        {/* Project 01 */}
        <div className="project-card border-t border-white/10 py-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Content */}
            <div className="project-content">
              <p className="text-sm text-cyan-400 mb-3">
                React · Django · Redux
              </p>

              <h3 className="text-4xl md:text-5xl font-bold">
                StartupHub
              </h3>

              <p className="mt-5 max-w-md text-gray-500 leading-7">
                A platform where startups, developers and investors
                can connect and build ideas together.
              </p>

              <button className="mt-6 text-sm hover:text-cyan-400 transition">
                View Project →
              </button>
            </div>

            {/* Image */}
            <div className="project-image group h-72 rounded-2xl overflow-hidden
              border border-white/10 bg-[#151515] flex items-center justify-center">

              <div className="text-center transition-transform duration-500 group-hover:scale-110">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
                  Project 01
                </p>

                <h4 className="text-5xl font-bold mt-3">
                  Startup<span className="text-cyan-400">Hub.</span>
                </h4>
              </div>

            </div>
          </div>
        </div>

        {/* Project 02 */}
        <div className="project-card border-t border-white/10 py-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Image */}
            <div className="project-image group h-72 rounded-2xl overflow-hidden
              border border-white/10 bg-[#151515] flex items-center justify-center
              md:order-1">

              <div className="text-center transition-transform duration-500 group-hover:scale-110">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
                  Project 02
                </p>

                <h4 className="text-5xl font-bold mt-3">
                  Store<span className="text-cyan-400">.</span>
                </h4>
              </div>

            </div>

            {/* Content */}
            <div className="project-content md:order-2">
              <p className="text-sm text-cyan-400 mb-3">
                React · API · Tailwind
              </p>

              <h3 className="text-4xl md:text-5xl font-bold">
                E-Commerce
              </h3>

              <p className="mt-5 max-w-md text-gray-500 leading-7">
                A responsive product application with search,
                filtering and category based products.
              </p>

              <button className="mt-6 text-sm hover:text-cyan-400 transition">
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