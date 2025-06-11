export default function ProjectOverview({ overview }) {
  return (
    <section className="mb-5">
      <h2 className="h5 fw-semibold text-dark">Project Overview</h2>
      <p className="text-muted">{overview}</p>
    </section>
  );
}
