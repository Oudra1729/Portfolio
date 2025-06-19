import project1 from "../assets/projects/pr-1.jpg";
import project2 from "../assets/projects/pr-2.jpg";
import project3 from "../assets/projects/pr-3.jpg";
import project4 from "../assets/projects/pr-4.jpg";
import rival from "../assets/projects/rival.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Laravel, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_CONTENT = `With a strong foundation in computer science and a passion for technology, I have dedicated my career to building user-centered applications that solve real-world problems. I thrive in collaborative environments, where I can leverage my skills in both front-end and back-end development to create seamless experiences. I am continuously learning and adapting to new technologies and trends in the industry, ensuring that I deliver modern, efficient, and scalable solutions. Whether it's optimizing a database query or enhancing user interfaces, I am committed to excellence in every aspect of development.`;

export const EXPERIENCES = [
  {
  duration: "freelance",
  role: "Full Stack Developer",
  company: "Tamouh Employment Services – Remote (tamouhemploymentuae9.ae)",
  description: `Developed a complete bilingual employment services platform for Tamouh Employment Services, specializing in manpower and HR solutions across the UAE. Used Laravel and Filament to build a powerful admin panel for managing clients, candidates, and job postings. Designed a responsive and accessible front-end using Tailwind CSS and Livewire. Focused on usability, speed, and multilingual support to ensure a seamless user experience for both Arabic and English speakers.`,
  technologies: [
    "Laravel",
    "Filament",
    "Livewire",
    "TailwindCSS",
    "Multilingual (EN/AR)"
  ]
}
,
  {
    duration: "freelance",
    role: "Full Stack Developer",
    company: "Rival Group LLC – Remote (rivalgroupllc.com)",
    description: `Led the development of a comprehensive web application for Rival Group LLC, focusing on enhancing user experience and functionality. Utilized Laravel for back-end development, ensuring robust server-side logic and database management. Implemented a responsive front-end using Blade and Tailwind CSS, optimizing the user interface for both desktop and mobile devices. Managed project workflows through GitHub, ensuring version control and collaboration with team members. The application supports multiple languages (English and Arabic), catering to a diverse user base.`,
    technologies: ["Laravel","Filament (for admin dashboard)","MySQL", "Multilingual (EN/AR)"],
  },
  {
    duration: "2 Months",
    role: "Web Developer (Intern)",
    company: "Alterweb – Marrakech (alterweb.ma)",
    description: `Developed a comprehensive customer, supplier, and invoice management application using Laravel. Integrated Tailwind CSS to design a modern and responsive user interface. Implemented CRUD functionalities, authentication, and role-based access control. Managed the project workflow through Trello for agile task tracking, and ensured seamless collaboration using Git and GitHub for version control. Gained experience in remote teamwork, troubleshooting, and optimizing application performance.`,
    technologies: ["Trello", "Laravel", "GitHub", "Tailwind CSS", "Git"],
  },
  {
    duration: "2 Months",
    role: "Project: Water Management Application (Freelance)",
    company: "Local Association",
    description: `Developed an application to manage customers, meter readings, and water bills using Laravel. Built functionalities for customer management, payments, and real-time statistics. Implemented secure access through a role-based permission system. Utilized Bootstrap for responsive and consistent CSS styling, ensuring a clean and user-friendly interface. Focused on enhancing both performance and user experience through efficient design and data management practices.`,
    technologies: ["HTML", "Bootstrap CSS", "Laravel", "MySQL"],
  },
  {
    duration: "1 Month",
    role: "Web Developer (Final Project)",
    company: "New Generation Center – Errachidia",
    description: `Developed a custom management system for the New Generation Center to streamline their operations. The system included functionalities for managing clients, staff, and schedules, with a user-friendly interface and secure access controls. The project involved designing a responsive front-end using modern web development tools and optimizing the back-end for efficient data management. The platform significantly reduced the administrative workload by automating key tasks and centralizing data access.`,
    technologies: ["React", "Node.js", "MongoDB", "Bootstrap", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "Rival Group LLC – Official Website",
    image: rival,
    role: "Full-Stack Web Developer",
    description: "Official website for Rival Group LLC.",
    url: "https://rivalgroupllc.com",
    technologies: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "Multilingual (EN/AR)"]
  },
  {
    title: "Web Developer (Final Year Project)",
    image: project4,
    role: "Web Developer (Final Year Project)",
    company: "ISTA Mohammed El-Fassi Errachidia",
    description: `Developed a web application for home search, allowing users to buy, sell, or rent properties. This project aimed to create a secure and reliable platform using Laravel, which included features such as user registration and login, advanced property search, and management of real estate advertisements. Additionally, I implemented a communication system that facilitates transactions between users and advertisers, enhancing user experience and engagement.`,
    technologies: ["Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Git"],
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "Bootstrap CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Intern Management App",
    image: project2,
    description: "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Laravel", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "School Management Tkinter App",
    image: project1,
    description: `Designed and developed a desktop application using Python and Tkinter to manage school operations. The application provides functionalities to manage student records, staff information, class schedules, and attendance. It includes features for generating reports, tracking performance, and managing administrative tasks. This project allowed the school staff to efficiently organize and access data, improving the overall management of the institution.`,
    technologies: ["Python", "Tkinter", "SQLite", "Git"],
  },
];

export const CONTACT = {
  address: "Marrakesh-Safi",
  phoneNo: "+212 695 96 80 53",
  email: "oudra.brahim.99@gmail.com",
};
