import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Floating blobs animation
const blobVariants = {
  float: {
    y: [0, -20, 0],
    x: [0, 15, 0],
    transition: { duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
  }
};

export default function Hero({ dark }) {
  const socials = [
    { icon: <FaGithub />, link: "https://github.com/Sivasai48" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/paravada-sivasai" },
    { icon: <FaEnvelope />, link: "mailto:paravadasivasai17@gmail.com" }
  ];

  return (
    <section className="relative flex flex-col items-center justify-center text-center h-screen px-6 md:px-20 overflow-hidden"
      style={{ background: dark ? "linear-gradient(135deg, #6B21A8, #DB2777, #FACC15)" : "linear-gradient(135deg, #FBCFE8, #FEF3C7, #C7D2FE)" }}
    >
      {/* Floating decorative blobs */}
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

      {/* Hero Text */}
      <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${dark ? "text-white" : "text-indigo-700"}`}>
        Hi, I'm <span className="text-pink-300">Siva Sai</span> 👋
      </h1>
      <p className={`text-lg md:text-2xl max-w-2xl mb-6 ${dark ? "text-yellow-100" : "text-gray-700"}`}>
        Full Stack Developer creating modern, responsive, and dynamic web applications.
      </p>

      {/* Social Links */}
      <div className="flex gap-6 text-2xl">
        {socials.map((s, i) => (
          <a key={i} href={s.link} target="_blank" rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
