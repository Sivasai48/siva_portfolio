import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";

// 🌸 Section Wrapper (smooth scroll + animation)
function SectionWrapper({ children, animation = "fade-up" }) {
  return (
    <section
      data-aos={animation}
      className="my-20 px-6 md:px-20"
    >
      <div className="bg-white/85 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100">
        {children}
      </div>
    </section>
  );
}

// 🌸 Navbar
function Navbar({ dark, setDark }) {
  const sections = [
    "Home",
    "About",
    "Education",
    "Experience",
    "Skills",
    "Projects",
    "Certifications",
    "Contact",
  ];
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 py-4 bg-white/80 backdrop-blur-md shadow-md z-50">
      <h1 className="font-bold text-2xl text-indigo-700">Paravada Siva Sai</h1>
      <ul className="hidden md:flex gap-6">
        {sections.map((sec) => (
          <li key={sec}>
            <a
              href={`#${sec.toLowerCase()}`}
              className="text-gray-800 hover:text-indigo-600 transition font-medium"
            >
              {sec}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex gap-4 items-center">
        <a
          href="/sivasaiparavada1.pdf"
          download
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Resume
        </a>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          {dark ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
        </button>
      </div>
    </nav>
  );
}

// 🌸 Hero Section
function Hero() {
  const socials = [
    { icon: <FaGithub />, link: "https://github.com/Sivasai48" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/paravada-sivasai" },
    { icon: <FaEnvelope />, link: "mailto:paravadasivasai17@gmail.com" },
  ];

  return (
    <section
      id="home"
      data-aos="fade-up"
      className="flex flex-col items-center justify-center text-center h-screen px-6 md:px-20 bg-gradient-to-b from-indigo-100 via-blue-100 to-blue-200"
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
        Hi, I'm <span className="text-indigo-600">Paravada Siva Sai</span> 👋
      </h2>
      <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mb-8">
        Full Stack Developer passionate about crafting clean, responsive, and dynamic web
        applications.
      </p>
      <div className="flex gap-6">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-indigo-600 transition"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

// 🌸 About Section
function About() {
  return (
    <SectionWrapper animation="fade-right">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">About Me</h2>
      <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
        I'm a dedicated Full Stack Developer who enjoys solving problems and creating beautiful,
        functional web applications. I love working with modern tools and frameworks like React,
        Node.js, and MongoDB to bring ideas to life.
      </p>
    </SectionWrapper>
  );
}

// 🌸 Education Section
function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering (Data Science)",
      college: "Anil Neerukonda Institute of Technology and Sciences",
      year: "2022 – 2026",
      details: "Focused on web development, Data Science, Machine Learning, and Data Structures.",
    },
    {
      degree: "Intermediate (MPC)",
      college: "Sasi Junior College",
      year: "2020 – 2022",
      details: "Studied Mathematics, Physics, and Chemistry.",
    },
  ];

  return (
    <SectionWrapper animation="fade-up">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Education</h2>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-indigo-600">{edu.degree}</h3>
            <p className="text-gray-800">{edu.college}</p>
            <p className="text-gray-600 text-sm">{edu.year}</p>
            <p className="text-gray-700 mt-2">{edu.details}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// 🌸 Experience Section
function Experience() {
  const experiences = [
    {
      role: "Full Stack Web Developer Intern",
      company: "Edumoon — Visakhapatnam",
      year: "May 2024 – Jul 2024",
      details:
        "Developed responsive interfaces (HTML, CSS, JavaScript). Built and optimized backend services with Node.js, Express, and MongoDB.",
    },
  ];

  return (
    <SectionWrapper animation="fade-left">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Experience</h2>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-indigo-600">{exp.role}</h3>
            <p className="text-gray-800">{exp.company}</p>
            <p className="text-gray-600 text-sm">{exp.year}</p>
            <p className="text-gray-700 mt-2">{exp.details}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// 🌸 Skills Section
function Skills() {
  const skills = [
    "React", "Node.js", "Express", "MongoDB", "MySQL", "Tailwind CSS",
    "HTML", "CSS", "JavaScript", "Java", "Python", "Power BI",
    "Excel", "AWS (Basics)", "Git & GitHub",
  ];

  return (
    <SectionWrapper animation="zoom-in">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="py-3 px-4 rounded-xl bg-indigo-50 text-gray-900 shadow-sm border border-indigo-100 hover:shadow-lg hover:bg-indigo-100 font-medium text-center transition-all duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// 🌸 Projects Section
function Projects() {
  const projects = [
    {
      name: "Sleep Tracker App",
      tech: "Vue, Node.js, Express, MongoDB",
      desc: "Built full-stack sleep tracker with authentication and RESTful APIs.",
    },
    {
      name: "Data Backup & Archival System",
      tech: "AWS DevOps Services",
      desc: "Automated backup and archival workflows using AWS services.",
    },
    {
      name: "Car Sales Dashboard",
      tech: "Tableau, Python, Kaggle dataset",
      desc: "Built interactive dashboards analyzing 10k+ sales records.",
    },
  ];

  return (
    <SectionWrapper animation="fade-up">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Projects</h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{p.name}</h3>
            <p className="text-gray-700 mb-1">{p.tech}</p>
            <p className="text-gray-600 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// 🌸 Certifications Section
function Certifications() {
  const certs = [
    { title: "Cloud Computing", org: "NPTEL", year: "2024" },
    { title: "Hackathon", org: "SIH", year: "2024" },
    { title: "Executive Member - Social Responsibilities Club", org: "SAC", year: "2024" },
    { title: "JNTU Code War 2.0", org: "JNTU", year: "2024" },
  ];

  return (
    <SectionWrapper animation="fade-right">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Certifications</h2>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {certs.map((c, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-indigo-600">{c.title}</h3>
            <p className="text-gray-800">{c.org}</p>
            <p className="text-gray-600 text-sm">{c.year}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// 🌸 Contact Section
function Contact() {
  return (
    <SectionWrapper animation="zoom-in">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Contact</h2>
      <p className="text-center text-gray-700 mb-6">
        I’d love to connect! Feel free to reach out anytime.
      </p>
      <div className="flex justify-center gap-6">
        <a href="mailto:paravadasivasai17@gmail.com" className="text-indigo-600 hover:underline">
          paravadasivasai17@gmail.com
        </a>
        <a href="https://linkedin.com/in/paravada-sivasai" className="text-indigo-600 hover:underline">
          LinkedIn
        </a>
      </div>
    </SectionWrapper>
  );
}

// 🌸 Footer
function Footer() {
  return (
    <footer className="text-center py-6 text-gray-600 bg-white/80 backdrop-blur-md border-t border-gray-200">
      © {new Date().getFullYear()} Siva Sai | Built with ❤️ and React
    </footer>
  );
}

// 🌸 Main App
export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="font-sans bg-gradient-to-b from-indigo-100 via-blue-50 to-blue-150 text-gray-900 min-h-screen">
      <Navbar dark={dark} setDark={setDark} />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="certifications"><Certifications /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}
