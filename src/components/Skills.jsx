import { EARLIER_STACK, SKILL_GROUPS } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="section-anchor border-b border-neutral-800 py-16">
      <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
        Skills
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <article
            key={group.id}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
          >
            <h3 className="text-base font-medium text-white">{group.title}</h3>
            {group.note && (
              <p className="mt-1 text-xs text-neutral-500">{group.note}</p>
            )}
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-white/5 px-2.5 py-1 text-sm text-neutral-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-sm text-neutral-500">{EARLIER_STACK}</p>
    </section>
  );
};

export default Skills;
