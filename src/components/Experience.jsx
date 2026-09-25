import { EXPERIENCE } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="section-anchor border-b border-neutral-800 py-16">
      <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
        Experience
      </h2>
      <div className="mt-8 space-y-10">
        {EXPERIENCE.map((item) => (
          <article key={item.id} className="grid gap-3 md:grid-cols-[9rem_1fr] md:gap-8">
            <p className="font-mono text-xs text-neutral-500">
              {item.period || item.periodFallback}
            </p>
            <div>
              <h3 className="text-lg font-medium text-white">
                {item.role}
                <span className="mt-1 block text-sm font-normal text-cyan-200/90">
                  {item.company}
                </span>
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-400">
                {item.summary}
              </p>
              {item.highlights && (
                <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-neutral-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-cyan-200 hover:text-white"
                >
                  {item.urlLabel}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
