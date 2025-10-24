import SectionWrapper from "./SectionWrapper";

export default function Certifications() {
  const certs = [
    { title:"React Developer", org:"Udemy", year:"2023" },
    { title:"Full Stack Web Dev", org:"Coursera", year:"2022" }
  ];

  return (
    <SectionWrapper>
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Certifications</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {certs.map(cert=>(
          <div key={cert.title} className="card text-gray-800">
            <h3 className="font-semibold">{cert.title}</h3>
            <span className="text-sm text-gray-500">{cert.org} - {cert.year}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
