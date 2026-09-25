import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="section-anchor border-b border-neutral-800 py-16">
      <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
        Selected projects
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-neutral-500">
        Public and academic work. Production work at Evidence Way is listed under experience and is not an open-source repository.
      </p>
      <div className="mt-8 grid gap-5">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="grid gap-5 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:grid-cols-[7.5rem_1fr] sm:items-start"
          >
            {project.image ? (
              <img
                src={project.image}
                alt=""
                width={120}
                height={120}
                className="h-24 w-full rounded-md object-cover sm:h-24 sm:w-28"
              />
            ) : (
              <div className="flex h-24 items-center justify-center rounded-md border border-dashed border-white/10 text-xs text-neutral-500">
                Academic
              </div>
            )}
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-cyan-200/70">
                {project.kind}
              </p>
              <h3 className="mt-1 text-lg font-medium text-white">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {project.description}
              </p>
              <p className="mt-2 text-sm text-neutral-500">{project.demonstrates}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-neutral-900 px-2 py-1 text-xs text-neutral-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {(project.links ??
                  (project.url
                    ? [{ href: project.url, label: project.urlLabel }]
                    : [])
                ).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
