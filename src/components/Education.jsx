import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Aditya Engineering College",
      duration: "2021 - 2025",
      details: [
        "CGPA: 8.9 (till date)",
        "Focused on Web Development, Machine Learning, and Data Structures",
      ],
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      duration: "2019 - 2021",
      details: ["Percentage: 96%", "Mathematics, Physics, Chemistry specialization"],
    },
    {
      degree: "Secondary School Education",
      institution: "Bhashyam High School",
      duration: "2018 - 2019",
      details: ["GPA: 10.0/10.0", "Top rank in district level"],
    },
  ];

  return (
    <SectionWrapper initialX={100}>
      <section id="education" className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">🎓 Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-xl shadow-md bg-white/70 backdrop-blur-sm border border-gray-200 transition-all duration-500"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-indigo-600">
                {edu.degree}
              </h3>
              <p className="text-gray-800 font-medium">{edu.institution}</p>
              <p className="text-gray-600 mb-3 italic">{edu.duration}</p>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
