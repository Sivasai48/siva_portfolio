import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
      gradient: "from-pink-100 to-pink-50 text-pink-800 border-pink-200",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Java", "Python"],
      gradient: "from-blue-100 to-blue-50 text-blue-800 border-blue-200",
    },
    {
      title: "Databases & Cloud",
      skills: ["MongoDB", "MySQL", "AWS (Basics)"],
      gradient: "from-purple-100 to-purple-50 text-purple-800 border-purple-200",
    },
    {
      title: "Tools & Analytics",
      skills: ["Git & GitHub", "Power BI", "Excel"],
      gradient: "from-green-100 to-green-50 text-green-800 border-green-200",
    },
  ];

  return (
    <SectionWrapper>
      <section
        id="skills"
        className="max-w-6xl mx-auto text-center py-16 px-6 md:px-12 overflow-visible"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-indigo-600"
        >
          💻 Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className={`p-6 rounded-2xl shadow-md bg-gradient-to-br ${category.gradient} border backdrop-blur-sm transition-all duration-500`}
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium bg-white/70 text-gray-800 px-3 py-2 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
