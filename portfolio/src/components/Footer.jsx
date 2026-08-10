import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-content", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#0a0a0a] text-white border-t border-white/10 px-6 py-14"
    >
      <div className="max-w-6xl mx-auto">

        {/* Top */}
        <div className="footer-content flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h2 className="text-2xl font-bold">
              Pushpendra<span className="text-cyan-400">.</span>
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Frontend Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="https://github.com/pushpendrakumar7454"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/pushpendra-kumar-a14360355/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Email ↗
            </a>
          </div>

        </div>

        {/* Small CTA */}
        <div className="footer-content mt-12">
          <p className="text-gray-500 text-sm">
            Have a project in mind?
          </p>

          <a
            href="mailto:yourmail@gmail.com"
            className="inline-block mt-2 text-lg font-medium hover:text-cyan-400 transition"
          >
            Let's work together →
          </a>
        </div>

        {/* Bottom */}
        <div className="footer-content border-t border-white/10 mt-12 pt-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-gray-600">
          <p>© 2026 Pushpendra Kumar</p>

          <p>Built with React & GSAP</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;