import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(navRef.current, {
      y: -60,
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
    })
      .from(
        logoRef.current,
        {
          x: -30,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        linksRef.current.children,
        {
          y: -15,
          opacity: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        buttonRef.current,
        {
          x: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <nav ref={navRef} className="w-full px-6 py-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 backdrop-blur-xl">

          {/* Logo */}
          <NavLink
            ref={logoRef}
            to="/"
            className="group relative text-2xl font-bold tracking-tight text-white"
          >
            Pushpendra
            <span className="text-cyan-400">.</span>

            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </NavLink>

          {/* Navigation */}
          <div
            ref={linksRef}
            className="hidden items-center gap-9 md:flex"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `group relative text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Home
              <span className="absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `group relative text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              About
              <span className="absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
            </NavLink>

            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `group relative text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Skills
              <span className="absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
            </NavLink>

            <NavLink
              to="/project"
              className={({ isActive }) =>
                `group relative text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Projects
              <span className="absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `group relative text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Contact
              <span className="absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
            </NavLink>
          </div>

          {/* CTA */}
          <NavLink
            ref={buttonRef}
            to="/contact"
            className="group relative overflow-hidden rounded-full border border-cyan-400/60 px-5 py-2.5 text-sm font-medium text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:text-black"
          >
            <span className="relative z-10 text-red-700">
              Let's Talk
            </span>

            <span className="absolute inset-0 -translate-x-full bg-cyan-400 transition-transform duration-300 group-hover:translate-x-0" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;