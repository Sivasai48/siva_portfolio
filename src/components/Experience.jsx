import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  const experiences = [
    { title: "Full Stack Developer", company: "ABC Tech", period: "2023-Present", desc: "Building web apps with React, Node.js, MongoDB." },
    { title: "Intern", company: "XYZ Corp", period: "2022-2023", desc: "Worked on frontend development and APIs." },
  ];

  return (
    <SectionWrapper initialX={100}>
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Experience</h2>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {experiences.map((exp, i)=>(
          <div key={i} className="card">
            <h3 className="font-semibold text-xl text-gray-800">{exp.title} - {exp.company}</h3>
            <span className="text-sm text-gray-500">{exp.period}</span>
            <p className="mt-2 text-gray-700">{exp.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
