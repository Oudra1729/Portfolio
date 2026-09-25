import { MotionConfig } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-950">
        <div className="fixed inset-0 z-[-2] h-full w-full bg-[#070b14] bg-[radial-gradient(#ffffff22_1px,#070b14_1px)] bg-[size:22px_22px]" />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-neutral-900"
        >
          Skip to content
        </a>
        <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
          <Navbar />
          <main id="main">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
        </div>
      </div>
    </MotionConfig>
  );
};

export default App;
