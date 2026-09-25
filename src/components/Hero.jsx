import { motion } from "framer-motion";
import { HERO_CONTENT, OPEN_TO, PROFILE } from "../constants";
import HeroOrbit from "./HeroOrbit";

const fade = (delay) => ({
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay, ease: "easeOut" },
  },
});

const Hero = () => {
  return (
    <section className="border-b border-neutral-800 pb-16 pt-12 lg:pt-20">
      <div className="flex w-full min-w-0 flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full min-w-0 max-w-xl">
          <motion.p
            variants={fade(0)}
            initial="hidden"
            animate="visible"
            className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200/80"
          >
            {PROFILE.focus}
          </motion.p>
          <motion.h1
            variants={fade(0.08)}
            initial="hidden"
            animate="visible"
            className="mt-3 text-4xl font-medium tracking-tight text-white sm:text-6xl"
          >
            {PROFILE.name}
          </motion.h1>
          <motion.p
            variants={fade(0.16)}
            initial="hidden"
            animate="visible"
            className="mt-3 text-xl text-neutral-200"
          >
            {PROFILE.role}
          </motion.p>
          <motion.p
            variants={fade(0.24)}
            initial="hidden"
            animate="visible"
            className="mt-5 text-base leading-relaxed text-neutral-400"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.p
            variants={fade(0.3)}
            initial="hidden"
            animate="visible"
            className="mt-3 text-sm text-neutral-500"
          >
            {OPEN_TO}
          </motion.p>
          <motion.div
            variants={fade(0.36)}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#experience"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-neutral-200"
            >
              View experience
            </a>
            <a
              href="#projects"
              className="rounded-md border border-white/15 px-4 py-2 text-sm text-white hover:border-white/40"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/15 px-4 py-2 text-sm text-white hover:border-white/40"
            >
              Contact me
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-4 py-2 text-sm text-cyan-200 hover:text-white"
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-4 py-2 text-sm text-cyan-200 hover:text-white"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
        <HeroOrbit />
      </div>
    </section>
  );
};

export default Hero;
