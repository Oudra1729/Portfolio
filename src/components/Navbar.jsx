import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logoo.jpeg";
import { NAV_LINKS, PROFILE } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 -mx-5 border-b border-white/5 bg-[#070b14]/90 px-5 backdrop-blur sm:-mx-8 sm:px-8">
      <nav className="flex items-center justify-between py-3" aria-label="Primary">
        <a href="#main" className="flex items-center gap-3 rounded-md">
          <img src={logo} alt="" className="h-9 w-9 rounded-md object-cover" />
          <span className="text-sm font-medium tracking-wide text-white">
            {PROFILE.name}
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 text-lg">
            <a
              href={PROFILE.github}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href={PROFILE.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <button
          type="button"
          className="rounded-md border border-white/10 px-3 py-2 text-sm text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="flex flex-col gap-3 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-sm text-neutral-200"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-4 pt-1 text-lg">
            <a
              href={PROFILE.github}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              <FaGithub />
            </a>
            <a
              href={PROFILE.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
