import rival from "../assets/projects/rival.png";
import project4 from "../assets/projects/pr-4.jpg";

export const PROFILE = {
  name: "Brahim Oudra",
  role: "Software Developer",
  focus: "Backend-focused Full Stack Developer",
  location: "Marrakesh-Safi",
  phone: "+212 695 96 80 53",
  email: "oudra.brahim.99@gmail.com",
  github: "https://github.com/Oudra1729",
  githubHandle: "Oudra1729",
  linkedin: "https://www.linkedin.com/in/brahim-oudra-2269151a6/",
  siteUrl: "https://portfoliooudra.vercel.app",
};

export const HERO_CONTENT =
  "Backend-focused developer building production applications with NestJS, TypeScript, PostgreSQL and React.";

export const ABOUT_CONTENT =
  "I'm a software developer focused on backend and full-stack development, with hands-on experience building and maintaining production applications using NestJS, TypeScript, PostgreSQL and React. I work on business logic, APIs, distributed workflows and the kind of problems that show up in real operations.";

export const OPEN_TO =
  "Open to Backend, Node.js, NestJS and Full Stack roles.";

/**
 * Evidence Way employment dates were not present in this repository.
 * Set a verified range before publishing, for example "March 2026 — Present".
 * An empty string renders as "Present" and does not invent a start date.
 */
export const EVIDENCE_WAY_PERIOD = "";

export const EXPERIENCE = [
  {
    id: "evidence-way",
    period: EVIDENCE_WAY_PERIOD,
    periodFallback: "Present",
    role: "Software Developer",
    company: "Evidence Way",
    summary:
      "Contributing to a production Transportation Management System covering shipment operations, stock, payments, cash-register workflows, invoicing, configuration and operational reporting. The work spans backend services and back-office frontend applications.",
    highlights: [
      "Developing and maintaining REST APIs with NestJS and TypeScript.",
      "Working across a microservices-based application ecosystem, including Kafka workflows.",
      "Implementing domain rules in PostgreSQL with TypeORM, and correcting production business anomalies.",
      "Building payment, cash-register, shipment, stock and invoicing functionality.",
      "Improving operational screens and backend queries, and writing integration tests.",
      "Producing Excel and PDF operational and financial exports.",
      "Developing React and Material UI back-office screens when the work crosses into the frontend.",
    ],
    technologies: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Kafka",
      "React",
      "Material UI",
    ],
  },
  {
    id: "tamouh",
    period: "Freelance",
    role: "Full Stack Developer",
    company: "Tamouh Employment Services",
    summary:
      "Built a bilingual employment-services platform for manpower and HR operations in the UAE, with an admin panel for clients, candidates and job postings.",
    technologies: ["Laravel", "Filament", "Livewire", "Tailwind CSS"],
    url: "https://tamouhemploymentuae9.ae",
    urlLabel: "Website",
  },
  {
    id: "rival",
    period: "Freelance",
    role: "Full Stack Developer",
    company: "Rival Group LLC",
    summary:
      "Delivered the company website and admin tooling, with Laravel on the backend, a responsive Blade interface, and English/Arabic content.",
    technologies: ["Laravel", "Filament", "MySQL", "Tailwind CSS"],
    url: "https://rivalgroupllc.com",
    urlLabel: "Website",
  },
  {
    id: "alterweb",
    period: "Internship · 2 months",
    role: "Web Developer",
    company: "Alterweb, Marrakech",
    summary:
      "Internship building a customer, supplier and invoice management application with Laravel, including authentication and role-based access.",
    technologies: ["Laravel", "Tailwind CSS", "Git"],
    url: "https://alterweb.ma",
    urlLabel: "Company",
  },
  {
    id: "water",
    period: "Freelance",
    role: "Web Developer",
    company: "Local association",
    summary:
      "Built a water-billing application for customers, meter readings, payments and consumption statistics, with role-based access.",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    url: "https://github.com/Oudra1729/facturation-eau",
    urlLabel: "Repository",
  },
];

export const SKILL_GROUPS = [
  {
    id: "backend",
    title: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "REST APIs",
      "Microservices",
      "PostgreSQL",
      "TypeORM",
      "Kafka",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["React", "Material UI", "Vite"],
  },
  {
    id: "engineering",
    title: "Software engineering",
    items: [
      "Git",
      "GitHub",
      "API design",
      "Debugging",
      "Integration testing",
      "Performance",
      "Business logic",
      "Domain modeling",
    ],
  },
  {
    id: "academic",
    title: "Academic focus",
    note: "Coursework, not professional specializations.",
    items: ["Artificial Intelligence", "Big Data", "Cybersecurity"],
  },
];

export const EARLIER_STACK =
  "Earlier freelance and internship work also used Laravel, MySQL, Tailwind CSS, Livewire and Filament.";

export const PROJECTS = [
  {
    id: "phishing",
    title: "Phishing AI Tools",
    kind: "Academic project",
    description:
      "Academic project for the Licence Professionnelle at Université Ibn Tofail — Kénitra. A React interface scores a URL or email text for phishing risk through a Python machine-learning API. It complements my backend work and is not professional security consulting.",
    demonstrates:
      "Connecting application development with coursework in artificial intelligence and cybersecurity.",
    technologies: ["Python", "scikit-learn", "Flask", "React", "Vite"],
    links: [
      { href: "https://phishing-ai-tools.onrender.com/", label: "Live demo" },
      { href: "https://github.com/Oudra1729/phishing-ai-tools", label: "Source" },
    ],
  },
  {
    id: "rival",
    title: "Rival Group LLC",
    kind: "Client website",
    image: rival,
    description:
      "Public company website delivered as freelance work: content management, a responsive interface, and English/Arabic pages.",
    demonstrates: "Shipping a complete client site from backend to interface.",
    technologies: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
    url: "https://rivalgroupllc.com",
    urlLabel: "Visit site",
  },
  {
    id: "hello-home",
    title: "Property search platform",
    kind: "Academic project",
    description:
      "Final-year project at ISTA Mohammed El-Fassi: a Laravel application for searching, listing and managing property ads, with accounts and messaging between users and advertisers.",
    demonstrates: "A full application with authentication, search and persistent data.",
    technologies: ["Laravel", "MySQL", "JavaScript"],
    image: project4,
  },
];

export const EDUCATION = [
  {
    id: "licence",
    title: "Licence Professionnelle",
    year: "2026",
    detail: "Artificial Intelligence, Big Data & Cybersecurity",
    focusLabel: "Academic focus",
    institution: "Université Ibn Tofail — Kénitra",
  },
  {
    id: "ofppt",
    title: "Diplôme en Développement Digital",
    year: "",
    detail: "Option Full Stack",
    institution: "OFPPT — ISTA Mohammed El-Fassi, Errachidia",
  },
];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
