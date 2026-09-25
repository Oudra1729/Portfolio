import { ABOUT_CONTENT } from "../constants";

const About = () => {
  return (
    <section id="about" className="section-anchor border-b border-neutral-800 py-16">
      <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
        About
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-200">
        {ABOUT_CONTENT}
      </p>
    </section>
  );
};

export default About;
