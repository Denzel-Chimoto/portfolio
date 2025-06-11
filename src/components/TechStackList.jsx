export default function TechStackList({ stack }) {
  return (
    <div className="mb-4">
      <h2 className="h5 fw-semibold text-dark">Tech Stack</h2>
      <ul className="list-group">
        {stack.map((tech, index) => (
          <li key={index} className="list-group-item">{tech}</li>
        ))}
      </ul>
    </div>
  );
}
