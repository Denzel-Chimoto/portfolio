export default function ExternalLinks({ links }) {
  return (
    <section className="mb-5">
      <h2 className="h5 fw-semibold text-dark">External Links</h2>
      <ul className="list-group">
        {links.map((link, index) => (
          <li key={index} className="list-group-item">
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
