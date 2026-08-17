
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-content", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a0a0a] px-4 py-16 text-white sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="contact-content mb-10 sm:mb-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 sm:text-xs sm:tracking-[0.35em]">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:mt-4 sm:text-5xl md:text-6xl">
            LET'S <span className="text-gray-600">TALK.</span>
          </h2>

          <p className="mt-4 max-w-md text-sm leading-6 text-gray-500 sm:mt-5 sm:leading-7">
            Have a project, idea or opportunity?
            Feel free to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          <div className="contact-content space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-600 sm:text-xs">
                Email
              </p>

              <a
                href="mailto:yourmail@gmail.com"
                className="mt-2 inline-block break-all text-base transition hover:text-cyan-400 sm:text-lg"
              >
                pushpendrakumar7454981358@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-600 sm:text-xs">
                Social
              </p>

              <div className="mt-2 flex flex-wrap gap-4 sm:gap-5">
                <a
                  href="https://github.com/pushpendrakumar7454"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 transition hover:text-cyan-400"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/pushpendra-kumar-a14360355/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 transition hover:text-cyan-400"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          <form className="contact-content space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b border-white/10 bg-transparent py-3 text-sm outline-none transition-colors focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-b border-white/10 bg-transparent py-3 text-sm outline-none transition-colors focus:border-cyan-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full resize-none border-b border-white/10 bg-transparent py-3 text-sm outline-none transition-colors focus:border-cyan-400"
            />

            <button
              type="submit"
              className="mt-2 rounded-full border border-white/10 px-5 py-3 text-sm transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 sm:mt-3 sm:px-6"
            >
              Send Message ↗
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

