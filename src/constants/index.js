import project1 from "../assets/projects/pr-1.jpg";
import project2 from "../assets/projects/pr-2.jpg";
import project3 from "../assets/projects/pr-3.jpg";
import project4 from "../assets/projects/pr-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like 
Laravel ,Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const ABOUT_CONTENT = `With a strong foundation in computer science and a passion for technology, I have dedicated my career to building user-centered applications that solve real-world problems. I thrive in collaborative environments, where I can leverage my skills in both front-end and back-end development to create seamless experiences. I am continuously learning and adapting to new technologies and trends in the industry, ensuring that I deliver modern, efficient, and scalable solutions. Whether it's optimizing a database query or enhancing user interfaces, I am committed to excellence in every aspect of development.`;

export const EXPERIENCES = [
  {
    Duration: "2 Month",
    role: "Web Developer (Intern)",
    company: "Alterweb – Marrakech: (alterweb.ma})",
    description: `Developed a comprehensive customer, supplier, and invoice management application using Laravel. Integrated Tailwind CSS to
design a modern and responsive user interface. Implemented CRUD functionalities, authentication, and role-based access control.
Managed the project workflow through Trello for agile task tracking, and ensured seamless collaboration using Git and GitHub
for version control. Gained experience in remote teamwork, troubleshooting, and optimizing application performance`,
    technologies: ["Trello", "Laravel", "GitHub", "Tailwind CSS","Git"],
  },
  {
    Duration: "2 Month",
    role: "Project: Water management application for a local association(Freelance)",
    company: "local association",
    description: `Developed an application to manage customers, meter readings, and water bills using Laravel. Built functionalities for customer
management, payments, and real-time statistics. Implemented secure access through a role-based permission system. Utilized
Bootstrap for responsive and consistent CSS styling, ensuring a clean and user-friendly interface. Focused on enhancing both
performance and user experience through efficient design and data management practices.`,
    technologies: ["HTML", "Bootstrap CSS", "Laravel", "mySQL"],
  },
  {
    Duration: "Month",
    role: "Web Developer (Final Project)",
    company: "New Generation Center – Errachidia",
    description: `Developed a custom management system for the New Generation Center to streamline their operations. The system included functionalities for managing clients, staff, and schedules, with a user-friendly interface and secure access controls. The project involved designing a responsive front-end using modern web development tools and optimizing the back-end for efficient data management. The platform significantly reduced the administrative workload by automating key tasks and centralizing data access.`,
    technologies: ["React", "Node.js", "MongoDB", "Bootstrap", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "🌐 Rival Group LLC – Official Website",
    image: project4,
     Role: "Full-Stack Web Developer",
     Description:" 🔗 URL: rivalgroupllc.com",
     Technologies: ["Laravel", "Blade", "Tailwind CSS", "MySQL","Multilingual (EN/AR)"]
  },
  {

    title: "Web Developer (Final Year Project(PFE))",
    image: project4,
    role: "Web Developer (Final Year Project)",
    company: "ISTA Mohammed El-Fassi Errachidia",
    Description: Developed a web application for home search, allowing users to buy, sell, or rent properties. This project aimed to create a secure and reliable platform using Laravel, which included features such as user registration and login, advanced property search, and management of real estate advertisements. Additionally, I implemented a communication system that facilitates transactions between users and advertisers, enhancing user experience and engagement.`,
    technologies: ["Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Git"],
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "Bootstrap CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Intern management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Laravel", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Ecole-gestion-tkinter-app- ",
    image: project1,
    description: `Designed and developed a desktop application using Python and Tkinter to manage school operations. The application provides functionalities to manage student records, staff information, class schedules, and attendance. It includes features for generating reports, tracking performance, and managing administrative tasks. This project allowed the school staff to efficiently organize and access data, improving the overall management of the institution.`,
    technologies: ["Python", "Tkinter", "SQLite", "Git"],
  },
];

export const CONTACT = {
  address: "Marrakesh-safi",
  phoneNo: "+212 695 96 80 53",
  email: "oudra.brahim.99@gmail.com",
};
