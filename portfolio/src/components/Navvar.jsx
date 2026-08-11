
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const buttonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

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
        linksRef.current?.children || [],
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

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        {
          height: 0,
          opacity: 0,
        },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.inOut",
      });
    }
  }, [menuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      ref={navRef}
      className="w-full px-3 py-4 sm:px-5 sm:py-5 md:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">

          {/* TOP NAVBAR */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-7">

            {/* Logo */}
            <NavLink
              ref={logoRef}
              to="/"
              className="group relative text-xl font-bold tracking-tight text-white sm:text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              Pushpendra
              <span className="text-cyan-400">.</span>

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </NavLink>

            {/* Desktop Navigation */}
            <div
              ref={linksRef}
              className="hidden items-center gap-6 md:flex lg:gap-9"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  {item.name}

                  <span className="absolute -bottom-2 left-0 h-[1px] w-full origin-left scale-x-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
                </NavLink>
              )}
            </div>

            {/* Desktop CTA */}
            <NavLink
              ref={buttonRef}
              to="/contact"
              className="hidden group relative overflow-hidden rounded-full border border-cyan-400/60 px-4 py-2 text-sm font-medium text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:text-black sm:px-5 sm:py-2.5 md:block"
            >
              <span className="relative z-10">
                Let's Talk
              </span>

              <span className="absolute inset-0 -translate-x-full bg-cyan-400 transition-transform duration-300 group-hover:translate-x-0" />
            </NavLink>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] md:hidden"
              aria-label="Toggle Menu"
            >
              <span
                className={`h-[2px] w-5 bg-cyan-400 transition-all duration-300 ${
                  menuOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />

              <span
                className={`h-[2px] w-5 bg-cyan-400 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-[2px] w-5 bg-cyan-400 transition-all duration-300 ${
                  menuOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>

          {/* MOBILE / TABLET MENU */}
          <div
            ref={mobileMenuRef}
            className="h-0 overflow-hidden opacity-0 md:hidden"
          >
            <div className="border-t border-white/10 px-4 pb-5 pt-4 sm:px-6">

              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-400/10 text-cyan-400"
                          : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Mobile CTA */}
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 block rounded-full border border-cyan-400/60 py-3 text-center text-sm font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
              >
                Let's Talk →
              </NavLink>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

