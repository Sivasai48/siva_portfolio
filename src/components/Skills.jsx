import SectionWrapper from "./SectionWrapper";

export default function Skills() {
  const skills = ["React", "Node.js", "Express", "MongoDB", "MySQL", "Tailwind", "Java", "Python"];

  return (
    <SectionWrapper>
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills.map(skill=>(
          <div key={skill} className="py-3 px-2 rounded-lg shadow-md flex items-center justify-center font-medium bg-blue-100 text-blue-800 hover:scale-105 transition-all duration-500">
            {skill}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
