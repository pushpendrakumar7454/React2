import React, { useEffect, useRef } from "react";
import gsap from "gsap";

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
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[calc(100vh-100px)] overflow-hidden px-6 py-10"
    >
      {/* Background */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="mx-auto grid min-h-[calc(100vh-100px)] max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">

        {/* LEFT */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="floating-card"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-cyan-400">
            Creative Developer
          </p>

          <h1 className="text-6xl font-black leading-[0.9] tracking-tight text-white md:text-8xl">
            BUILD
            <br />
            <span className="text-gray-500">DIGITAL</span>
            <br />
            <span className="text-cyan-400">EXPERIENCE.</span>
          </h1>

          <p className="mt-7 max-w-lg text-gray-500">
            I create modern web experiences where clean development
            meets creative interaction and motion.
          </p>

          <button className="mt-8 rounded-full bg-cyan-400 px-7 py-3 font-medium text-black transition duration-300 hover:scale-105">
            Explore My Work →
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative flex min-h-[500px] items-center justify-center">

          {/* Main Card */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="floating-card relative z-20 h-[360px] w-[280px] rotate-2 rounded-[2rem] border border-white/10 bg-[#111111] p-7 shadow-2xl md:h-[420px] md:w-[330px]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-gray-500">
                Portfolio
              </span>

              <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
            </div>

            <div className="mt-20">
              <p className="text-sm text-gray-500">Hello, I'm</p>

              <h2 className="mt-2 text-4xl font-bold text-white">
                Pushpendra
                <span className="text-cyan-400">.</span>
              </h2>

              <p className="mt-3 text-gray-400">
                Frontend Developer
              </p>
            </div>

            <div className="absolute bottom-7 left-7 right-7 flex justify-between border-t border-white/10 pt-5">
              <div>
                <p className="text-2xl font-bold text-white">06+</p>
                <p className="text-xs text-gray-500">Projects</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">React</p>
                <p className="text-xs text-gray-500">Main Stack</p>
              </div>
            </div>
          </div>

          {/* React Card */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="floating-card absolute -left-2 top-14 z-30 rounded-2xl border border-white/10 bg-[#151515] px-5 py-4 shadow-xl md:left-0"
          >
            <p className="text-xs text-gray-500">Currently using</p>
            <p className="mt-1 font-semibold text-cyan-400">
              React.js
            </p>
          </div>

          {/* Code Card */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="floating-card absolute -right-2 bottom-20 z-30 rounded-2xl border border-white/10 bg-[#151515] px-5 py-4 shadow-xl md:right-0"
          >
            <p className="text-xs text-gray-500">Building with</p>
            <p className="mt-1 font-semibold text-white">
              GSAP × Tailwind
            </p>
          </div>

          {/* Number */}
          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="floating-card absolute -bottom-2 left-10 z-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-6 py-5 backdrop-blur-md"
          >
            <p className="text-3xl font-black text-cyan-400">
              01
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;