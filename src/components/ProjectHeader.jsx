import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


export default function ProjectHeader({
  title,
  year,
  role,
  techStack,
  githubLink,
  demoLink,
}) {
  return (
    <header className="mb-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8">
            <h1 className="h3 fw-bold text-dark">{title}</h1>
            <div className="text-secondary mt-2">
              <span>{year}</span>
              <span className="mx-2">•</span>
              <span>{role}</span>
            </div>
          </div>

          <div className="col-4 text-end">
            {githubLink && (
              <a href={githubLink} target="_blank" className="btn btn-outline-dark me-2">
                <FaGithub size={20} /> GitHub
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" className="btn btn-primary">
                <FaExternalLinkAlt size={18} /> Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="mt-3">
          {techStack.map((tech) => (
            <span key={tech} className="badge bg-primary me-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
