import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ dark, setDark, sections = [] }) {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 py-4 bg-white shadow-md z-50">
      <h1 className="font-bold text-2xl text-indigo-500">Siva Sai</h1>
      <ul className="hidden md:flex gap-6">
        {sections.map(sec => (
          <li key={sec}>
            <a href={`#${sec.toLowerCase()}`} className="hover:text-indigo-400 transition-colors duration-300 font-medium">{sec}</a>
          </li>
        ))}
      </ul>
      <div className="flex gap-4 items-center">
        <a href="/resume.pdf" download className="btn btn-gradient">Resume</a>
        <button onClick={() => setDark(!dark)} className="p-2 rounded-full ring-1 ring-gray-400 hover:ring-gray-500 transition">
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
