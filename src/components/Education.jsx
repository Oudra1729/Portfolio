import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <section id="education" className="section-anchor border-b border-neutral-800 py-16">
      <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
        Education
      </h2>
      <div className="mt-8 space-y-8">
        {EDUCATION.map((item) => (
          <article key={item.id} className="grid gap-2 md:grid-cols-[9rem_1fr] md:gap-8">
            <p className="font-mono text-xs text-neutral-500">{item.year}</p>
            <div>
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-neutral-300">
                {item.focusLabel ? `${item.focusLabel}: ${item.detail}` : item.detail}
              </p>
              {item.institution && (
                <p className="mt-1 text-sm text-neutral-500">{item.institution}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
