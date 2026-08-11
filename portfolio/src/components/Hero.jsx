import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import push1 from '../../public/push1.jpeg'

const Hero = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(heroRef.current, {
      opacity: 0,
      duration: 0.4,
    });

    tl.from(
      cardsRef.current,
      {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: "power4.out",
      },
      "-=0.2"
    );

    // Floating animation
    gsap.to(".floating-card", {
      y: -12,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    });

    return () => {
      tl.kill();
      gsap.killTweensOf(".floating-card");
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[calc(100vh-100px)] overflow-hidden px-4 py-8 sm:px-6 sm:py-10"
    >
      {/* Background */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px] lg:h-[450px] lg:w-[450px]" />

      <div className="mx-auto grid min-h-[calc(100vh-100px)] max-w-7xl grid-cols-1 items-center gap-12 py-6 sm:gap-14 lg:grid-cols-2 lg:gap-10 lg:py-0">

        {/* LEFT */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="floating-card flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm sm:tracking-[0.4em]">
            Creative Developer
          </p>

          <h1 className="text-5xl font-black leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            BUILD
            <br />
            <span className="text-gray-500">DIGITAL</span>
            <br />
            <span className="text-cyan-400">EXPERIENCE.</span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-6 text-gray-500 sm:mt-7 sm:text-base">
            I create modern web experiences where clean development
            meets creative interaction and motion.
          </p>

          <button className="mt-7 rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-105 sm:mt-8 sm:px-7 sm:text-base">
            Explore My Work →
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative flex min-h-[420px] w-full items-center justify-center sm:min-h-[500px]">

          {/* Main Card */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="floating-card relative z-20 h-[340px] w-[250px] rotate-2 overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] shadow-2xl sm:h-[390px] sm:w-[290px] md:h-[420px] md:w-[330px]"
          >

            {/* Full Image */}
            <img
              src={push1}
              alt="Pushpendra"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Top Content */}
            <div className="relative z-10 flex items-center justify-between p-5 sm:p-7">
              <span className="text-[10px] uppercase tracking-widest text-gray-300 sm:text-xs">
                Portfolio
              </span>

              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] sm:h-3 sm:w-3" />
            </div>

            {/* Text Over Image */}
            <div className="absolute bottom-20 left-5 z-10 sm:bottom-24 sm:left-7">
              <p className="text-xs text-gray-300 sm:text-sm">
                Hello, I'm
              </p>

              <h2 className="mt-1 text-3xl font-bold text-white sm:mt-2 sm:text-4xl">
                Pushpendra
                <span className="text-cyan-400">.</span>
              </h2>

              <p className="mt-2 text-sm text-gray-200 sm:mt-3">
                Frontend Developer
              </p>
            </div>

            {/* Bottom Stats */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-between border-t border-white/20 bg-black/30 px-5 py-4 backdrop-blur-sm sm:px-7 sm:py-5">
              <div>
                <p className="text-xl font-bold text-white sm:text-2xl">
                  06+
                </p>
                <p className="text-[10px] text-gray-300 sm:text-xs">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-white sm:text-2xl">
                  React
                </p>
                <p className="text-[10px] text-gray-300 sm:text-xs">
                  Main Stack
                </p>
              </div>
            </div>
          </div>

          {/* React Card */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="floating-card absolute left-0 top-8 z-30 rounded-2xl border border-white/10 bg-[#151515] px-4 py-3 shadow-xl sm:left-2 sm:top-14 sm:px-5 sm:py-4 md:left-0"
          >
            <p className="text-[10px] text-gray-500 sm:text-xs">
              Currently using
            </p>

            <p className="mt-1 text-sm font-semibold text-cyan-400 sm:text-base">
              React.js
            </p>
          </div>

          {/* Code Card */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="floating-card absolute right-0 bottom-12 z-30 rounded-2xl border border-white/10 bg-[#151515] px-4 py-3 shadow-xl sm:right-2 sm:bottom-20 sm:px-5 sm:py-4 md:right-0"
          >
            <p className="text-[10px] text-gray-500 sm:text-xs">
              Building with
            </p>

            <p className="mt-1 text-sm font-semibold text-white sm:text-base">
              GSAP × Tailwind
            </p>
          </div>

          {/* Number */}
          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="floating-card absolute bottom-0 left-4 z-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-4 backdrop-blur-md sm:left-10 sm:px-6 sm:py-5"
          >
            <p className="text-2xl font-black text-cyan-400 sm:text-3xl">
              01
            </p>

            <p className="text-[10px] uppercase tracking-widest text-gray-500 sm:text-xs">
              Developer
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

