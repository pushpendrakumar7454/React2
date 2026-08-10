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
      className="fixed inset-0 z-[999] bg-[#050505] flex flex-col items-center justify-center"
    >
      {/* Percentage */}
      <div
        ref={numberRef}
        className="text-[100px] md:text-[160px] font-bold tracking-tighter text-white"
      >
        {progress}
        <span className="text-cyan-400">%</span>
      </div>

      {/* Loading text */}
      <p className="mt-4 text-sm uppercase tracking-[0.4em] text-gray-500">
        Loading Portfolio
      </p>

      {/* Progress line */}
      <div className="w-64 h-[2px] bg-gray-800 mt-8 overflow-hidden">
        <div
          className="h-full bg-cyan-400 transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Loader;