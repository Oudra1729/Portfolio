import { PROFILE } from "../constants";

const Contact = () => {
  return (
    <footer id="contact" className="section-anchor py-16">
      <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
        Contact
      </h2>
      <p className="mt-4 max-w-xl text-neutral-300">
        For backend, Node.js, NestJS or full-stack opportunities.
      </p>
      <ul className="mt-6 space-y-2 text-sm">
        <li>
          <a className="text-cyan-200 hover:text-white" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
        </li>
        <li>
          <a
            className="text-cyan-200 hover:text-white"
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="text-cyan-200 hover:text-white"
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub · {PROFILE.githubHandle}
          </a>
        </li>
        <li className="text-neutral-400">{PROFILE.location}</li>
        <li>
          <a className="text-neutral-300 hover:text-white" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
            {PROFILE.phone}
          </a>
        </li>
      </ul>
      <p className="mt-12 text-xs text-neutral-600">
        © {new Date().getFullYear()} {PROFILE.name}
      </p>
    </footer>
  );
};

export default Contact;
