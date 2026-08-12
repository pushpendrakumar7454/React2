import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";

const NotFound = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".error-label", {
        y: 25,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
        .from(
          ".error-number",
          {
            y: 100,
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .from(
          ".error-content",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".error-button",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2"
        );

      // Small floating animation
      gsap.to(".error-glow", {
        scale: 1.2,
        opacity: 0.6,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={pageRef}
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white flex items-center justify-center px-6"
    >
      {/* Background glow */}
      <div
        className="error-glow pointer-events-none absolute
        left-1/2 top-1/2 h-72 w-72
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="relative z-10 text-center">

        {/* Label */}
        <div className="error-label flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-cyan-400/50" />

          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
            Error 404
          </p>

          <span className="h-px w-8 bg-cyan-400/50" />
        </div>

        {/* Number */}
        <h1
          className="error-number mt-5 text-[120px] font-black
          leading-none tracking-[-0.08em]
          sm:text-[150px] md:text-[200px]"
        >
          4<span className="text-cyan-400">0</span>4
        </h1>

        {/* Content */}
        <div className="error-content mt-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            Lost somewhere?
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
            The page you're looking for doesn't exist or may have
            been moved somewhere else.
          </p>
        </div>

        {/* Button */}
        <Link
          to="/"
          className="error-button mt-7 inline-flex items-center gap-2
          rounded-full border border-white/10
          px-6 py-3 text-sm text-gray-300
          transition-all duration-300
          hover:border-cyan-400
          hover:bg-cyan-400/5
          hover:text-cyan-400"
        >
          <span>←</span>
          Back to Home
        </Link>

      </div>
    </section>
  );
};

export default NotFound;