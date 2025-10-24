import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const socials = [
    { icon: <FaGithub />, link: "https://github.com/yourusername" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourprofile" },
    { icon: <FaEnvelope />, link: "mailto:youremail@example.com" }
  ];

  return (
    <SectionWrapper initialX={100}>
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Contact</h2>
      <p className="text-center mb-4 text-gray-700">Let's collaborate or just say hi 👋</p>
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-6 text-gray-800">
        {socials.map((s,i)=>(
          <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-indigo-500 transition-colors duration-300">{s.icon}</a>
        ))}
      </div>
    </SectionWrapper>
  );
}
