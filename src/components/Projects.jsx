import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  const projects = [
    { title: "Sleep Tracker App", desc: "Track sleep cycles and visualize weekly reports.", tech: ["React","Node.js","MySQL"], link:"#"},
    { title: "Task Manager", desc: "Organize tasks with reminders and calendar integration.", tech:["Express","MongoDB","SendGrid"], link:"#"},
    { title: "AI Trip Planner", desc: "Automates trip itineraries using AI and APIs.", tech:["n8n","OpenAI","Node.js"], link:"#"}
  ];

  return (
    <SectionWrapper initialX={100}>
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map(proj=>(
          <div key={proj.title} className="card">
            <h3 className="text-xl font-semibold text-gray-800">{proj.title}</h3>
            <p className="mt-2 text-gray-700">{proj.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {proj.tech.map(t=>(
                <span key={t} className="px-2 py-1 text-xs bg-blue-200 text-blue-800 rounded-full">{t}</span>
              ))}
            </div>
            <a href={proj.link} className="mt-4 inline-block text-blue-600 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
