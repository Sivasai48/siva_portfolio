import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl font-bold mb-4 text-center text-indigo-600">About Me</h2>
      <p className="max-w-2xl mx-auto text-lg leading-relaxed text-center text-gray-700">
        I'm a Full Stack Developer creating modern, responsive, and performant web applications.
        I enjoy solving real-world problems with clean code and creative design.  
        Passionate about learning new technologies and building beautiful user experiences.
      </p>
    </SectionWrapper>
  );
}
