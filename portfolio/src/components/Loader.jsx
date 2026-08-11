import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const numberRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const obj = { value: 0 };

    gsap.to(obj, {
      value: 100,
      duration: 2.5,
      ease: "power2.inOut",

      onUpdate: () => {
        setProgress(Math.floor(obj.value));
      },

      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#050505] px-4"
    >
      {/* Percentage */}
      <div
        ref={numberRef}
        className="text-[72px] font-bold tracking-tighter text-white sm:text-[100px] md:text-[140px] lg:text-[160px]"
      >
        {progress}
        <span className="text-cyan-400">%</span>
      </div>

      {/* Loading text */}
      <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-gray-500 sm:mt-4 sm:text-xs md:text-sm md:tracking-[0.4em]">
        Loading Portfolio
      </p>

      {/* Progress line */}
      <div className="mt-6 h-[2px] w-52 overflow-hidden bg-gray-800 sm:mt-8 sm:w-64 md:w-72">
        <div
          className="h-full bg-cyan-400 transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Loader;