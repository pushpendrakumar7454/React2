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
      className="bg-[#0a0a0a] text-white px-6 py-24"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="contact-content mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
            05 / Contact
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold">
            LET'S <span className="text-gray-600">TALK.</span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
            Have a project, idea or opportunity?
            Feel free to get in touch.
          </p>
        </div>

        {/* Contact Area */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div className="contact-content space-y-6">

            <div>
              <p className="text-xs text-gray-600 uppercase tracking-wider">
                Email
              </p>

              <a
                href="mailto:yourmail@gmail.com"
                className="inline-block mt-2 text-lg hover:text-cyan-400 transition"
              >
                yourmail@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs text-gray-600 uppercase tracking-wider">
                Social
              </p>

              <div className="flex gap-5 mt-2">
                <a
                  href="https://github.com/pushpendrakumar7454"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/pushpendra-kumar-a14360355/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

          </div>

          {/* Right */}
          <form className="contact-content space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-white/10
              py-3 text-sm outline-none
              focus:border-cyan-400 transition-colors"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-white/10
              py-3 text-sm outline-none
              focus:border-cyan-400 transition-colors"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-transparent border-b border-white/10
              py-3 text-sm outline-none resize-none
              focus:border-cyan-400 transition-colors"
            />

            <button
              type="submit"
              className="mt-3 rounded-full border border-white/10
              px-6 py-3 text-sm
              hover:border-cyan-400 hover:text-cyan-400
              transition-all duration-300"
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