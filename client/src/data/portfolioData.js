export const personalInfo = {
  name: "Ali Waqar Zafar",
  title: "Full-Stack Developer",
  tagline: "Architecting the digital world,\none stack at a time.",
  subTagline: "MERN Stack · React · Node.js · MongoDB",
  email: "aliwaqarzafar04@gmail.com",
  phone: "+92 318 5831500",
  location: "Rawalpindi, Pakistan",
  linkedin: "https://www.linkedin.com/in/ali-waqar-zafar-a45964324/",
  github: "https://github.com/aliwaqar04",
  summary: "Full-Stack Developer and Computer Science undergraduate with hands-on experience in MERN stack and C# / Blazor. Built production-grade platforms with authentication, CRUD operations, and cloud deployment. Obsessed with clean code and user-centric design.",
  resumeUrl: "/Ali-Waqar-Zafar-CV.pdf",
}

export const skills = [
  {
    category: "Languages & Frameworks",
    icon: "code",
    items: ["JavaScript", "TypeScript", "Python", "C#", "C++", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    icon: "monitor",
    items: ["React.js", "Vite", "TailwindCSS", "Bootstrap", "Blazor", "Responsive Design", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: "server",
    items: ["Node.js", "Express.js", "ASP.NET", "RESTful APIs", "JWT Auth", "MVC Architecture"],
  },
  {
    category: "Database & Cloud",
    icon: "database",
    items: ["MongoDB", "SQL Server", "Firebase", "Vercel", "Render", "Heroku"],
  },
  {
    category: "Dev Tools",
    icon: "tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Jenkins", "Figma", "Agile / Scrum"],
  },
]

export const projects = [
  {
    id: 1,
    title: "Digital Tailor Management System",
    subtitle: "Freelance Project",
    description: "Role-based MERN platform with complete order lifecycle management, measurement tracking, JWT authentication, and automated PDF invoice generation.",
    tech: ["React.js", "Node.js", "MongoDB", "JWT", "PDF Gen", "Express.js"],
    github: "https://github.com/aliwaqar04/digital-tailor-system",
    live: null,
    featured: true,
    date: "Aug – Sep 2025",
    color: "#4a6741",
  },
  {
    id: 2,
    title: "E-Commerce Full-Stack App",
    subtitle: "Personal Project",
    description: "MERN-based platform with product listing, advanced filtering, cart system, admin dashboard, and secure payment flow.",
    tech: ["React.js", "Node.js", "MongoDB", "Redux", "TailwindCSS", "JWT"],
    github: "https://github.com/aliwaqar04/ecommerce-fullstack-v2",
    live: null,
    featured: true,
    date: "Jul – Aug 2025",
    color: "#5a8f42",
  },
  {
    id: 3,
    title: "Nexus Platform",
    subtitle: "Full-Stack Web App",
    description: "Secure RESTful platform with JWT authentication, role-based access control, full CRUD operations, and clean MVC architecture.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "MVC", "REST API"],
    github: "https://github.com/aliwaqar04/Nexus-Platform",
    live: null,
    featured: false,
    date: "Aug – Sep 2025",
    color: "#3c612c",
  },
  {
    id: 4,
    title: "Bin Buddy — Smart Waste Management",
    subtitle: "AI-Powered System",
    description: "Full-stack Blazor system with AI-powered route optimization, real-time monitoring, and comprehensive reporting features.",
    tech: ["Blazor", "C#", "ASP.NET", "SQL Server", "AI Integration"],
    github: "https://github.com/aliwaqar04/Smart-Waste-Management-System",
    live: null,
    featured: false,
    date: "Jun – Jul 2025",
    color: "#7aaa61",
  },
]

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer Intern (MERN)",
    company: "DevelopersHub Corporation",
    location: "Islamabad",
    period: "Jul 2025 – Sep 2025",
    type: "Internship",
    bullets: [
      "Developed a full-stack E-Commerce Web Application using React.js, Node.js, Express.js, and MongoDB.",
      "Built responsive UI from Figma designs, ensuring cross-device compatibility.",
      "Designed and implemented RESTful CRUD APIs for product management.",
      "Integrated JWT-based authentication, role-based protected routes, and cart management.",
      "Deployed the application on Vercel/Render/Heroku using production-ready configurations.",
      "Followed Agile methodologies with weekly milestones and proper GitHub version control.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Vercel"],
  },
]

export const education = [
  {
    id: 1,
    degree: "Associate Degree in Computer Science (ADCS)",
    institution: "Air University",
    location: "Islamabad",
    period: "2023 – 2025",
  },
]

export const strengths = [
  { label: "Problem Solving", icon: "🧩" },
  { label: "Leadership",      icon: "🎯" },
  { label: "Team Collaboration", icon: "🤝" },
  { label: "Communication",  icon: "💬" },
]

export const navLinks = [
  { label: "About",      to: "about" },
  { label: "Skills",     to: "skills" },
  { label: "Projects",   to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Contact",    to: "contact" },
]
