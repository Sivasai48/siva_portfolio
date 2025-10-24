import { useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Section Wrapper for X-axis animation
function SectionWrapper({ children, initialX = -100, dark }) {
  return (
    <motion.div
      initial={{ x: initialX, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="my-20 px-6 md:px-20"
    >
      <div
        className={`p-6 rounded-xl shadow-md ${
          dark ? "bg-white/10 backdrop-blur-md" : "bg-white/30 backdrop-blur-sm"
        } transition-all duration-500`}
      >
        {children}
      </div>
    </motion.div>
  );
}

// Navbar Component
function Navbar({ dark, setDark, sections }) {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 py-4 z-50 backdrop-blur-md bg-white/20 dark:bg-black/20 transition-colors duration-500">
      <h1 className="font-bold text-2xl text-indigo-500">Siva Sai</h1>
      <ul className="hidden md:flex gap-6">
        {sections.map(sec => (
          <li key={sec}>
            <a
              href={`#${sec.toLowerCase()}`}
              className="hover:text-indigo-400 transition-colors duration-300 font-medium"
            >
              {sec}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex gap-4 items-center">
        <a
          href="/resume.pdf"
          download
          className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-semibold transition-colors duration-300"
        >
          Resume
        </a>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full ring-1 ring-gray-400 hover:ring-gray-500 transition"
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

// Hero Component
function Hero({ dark }) {
  const socials = [
    { icon: <FaGithub />, link: "https://github.com/Sivasai48" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/paravada-sivasai" },
    { icon: <FaEnvelope />, link: "mailto:paravadasivasai17@gmail.com" },
  ];

  const blobVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 15, 0],
      transition: { duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
    },
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center h-screen px-6 md:px-20 overflow-hidden"
    >
      {/* Floating blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-pink-400 rounded-full filter blur-3xl opacity-50 top-10 left-10"
        variants={blobVariants}
        animate="float"
      />
      <motion.div
        className="absolute w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl opacity-40 bottom-20 right-20"
        variants={blobVariants}
        animate="float"
      />

      <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${dark ? "text-white" : "text-indigo-700"}`}>
        Hi, I'm <span className="text-pink-300">Siva Sai</span> 👋
      </h1>
      <p className={`text-lg md:text-2xl max-w-2xl mb-6 ${dark ? "text-yellow-100" : "text-gray-700"}`}>
        Full Stack Developer creating modern, responsive, and dynamic web applications.
      </p>

      <div className="flex gap-6 text-2xl">
        {socials.map((s, i) => (
          <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors duration-300">
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

// About Component
function About({ dark }) {
  return (
    <SectionWrapper dark={dark}>
      <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
      <p className="text-center text-lg leading-relaxed">
        I’m a passionate Full Stack Developer. I build clean, performant, and user-friendly web applications.
        I enjoy solving real-world problems with creative and logical solutions.
      </p>
    </SectionWrapper>
  );
}

// Experience Component
function Experience({ dark }) {
  return (
    <SectionWrapper dark={dark} initialX={100}>
      <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Web Developer at XYZ Company (2023-Present)</li>
        <li>Internship at ABC Technologies (2022)</li>
      </ul>
    </SectionWrapper>
  );
}

// Skills Component
function Skills({ dark }) {
  const skills = ["React", "Node.js", "Express", "MongoDB", "MySQL", "Tailwind", "JavaScript", "Python"];
  return (
    <SectionWrapper dark={dark}>
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map(skill => (
          <span key={skill} className={`px-3 py-1 rounded-full font-medium ${dark ? "bg-white/10 text-white" : "bg-indigo-100 text-indigo-700"}`}>
            {skill}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}

// Projects Component
function Projects({ dark }) {
  const projects = [
    { title: "Sleep Tracker App", desc: "Track sleep cycles and visualize weekly reports.", tech: ["React", "Node.js", "MySQL"], link: "#" },
    { title: "Task Manager", desc: "Organize tasks with reminders and calendar integration.", tech: ["Express", "MongoDB", "SendGrid"], link: "#" },
    { title: "AI Trip Planner", desc: "Automates trip itineraries using AI and APIs.", tech: ["n8n", "OpenAI", "Node.js"], link: "#" },
  ];

  return (
    <SectionWrapper dark={dark} initialX={100}>
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(proj => (
          <div key={proj.title} className={`p-4 rounded-xl shadow-md ${dark ? "bg-white/10 text-white" : "bg-white/60 text-gray-900"}`}>
            <h3 className="font-semibold text-xl">{proj.title}</h3>
            <p className="mt-2 text-sm">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {proj.tech.map(t => <span key={t} className="text-xs bg-indigo-500 px-2 py-1 rounded-full">{t}</span>)}
            </div>
            <a href={proj.link} className="mt-3 inline-block text-indigo-300 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// Certifications Component
function Certifications({ dark }) {
  const certs = ["React Developer Certificate", "Node.js Professional", "Full Stack Web Development"];
  return (
    <SectionWrapper dark={dark} initialX={-100}>
      <h2 className="text-3xl font-bold mb-4 text-center">Certifications</h2>
      <ul className="list-disc pl-5 space-y-2">
        {certs.map(cert => <li key={cert}>{cert}</li>)}
      </ul>
    </SectionWrapper>
  );
}

// Contact Component
function Contact({ dark }) {
  return (
    <SectionWrapper dark={dark} initialX={100}>
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
      <p className="text-center mb-4">Let's collaborate or just say hi 👋</p>
      <div className="flex justify-center">
        <a href="mailto:paravadasivasai17@gmail.com" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl transition-colors duration-300">
          Send Email
        </a>
      </div>
    </SectionWrapper>
  );
}

// Footer Component
function Footer({ dark }) {
  return (
    <footer className="text-center py-6 text-sm opacity-70">
      © 2025 Siva Sai. All Rights Reserved.
    </footer>
  );
}

// Main App
export default function App() {
  const [dark, setDark] = useState(true);
  const sections = ["About", "Experience", "Skills", "Projects", "Certifications", "Contact"];

  return (
    <div className={dark ? "dark" : ""}>
      <div
     className={`min-h-screen transition-colors duration-500 ${
    dark
      ? "bg-gradient-to-b from-teal-900 via-cyan-800 to-blue-800 text-white"
      : "bg-gradient-to-b from-beige-50 via-cream-50 to-pink-50 text-gray-900"
  }`}

      >
        <Navbar dark={dark} setDark={setDark} sections={sections} />
        <Hero dark={dark} />
        <About dark={dark} />
        <Experience dark={dark} />
        <Skills dark={dark} />
        <Projects dark={dark} />
        <Certifications dark={dark} />
        <Contact dark={dark} />
        <Footer dark={dark} />
      </div>
    </div>
  );
}
