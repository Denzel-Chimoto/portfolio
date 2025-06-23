import React from "react";
//import "../styles/Experience.css"; // Optional styling

function Experience() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">Experience</h1>

      <section className="mb-5">
        <h2>CABS Financial Services — Accounting Intern</h2>
        <a href="https://www.cabs.co.zw/" target="_blank" rel="noopener noreferrer">
          CABS Financial Services
        </a>
        <p><strong>Date:</strong> Summer‑2024 (Internship)</p>
        <p>I interned in the Accounting Department, gaining valuable hands‑on experience with the systems used across Zimbabwe’s banking and finance industry.</p>
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item">Processed daily financial transactions and reconciliations.</li>
          <li className="list-group-item">Supported account setup and funds reversals.</li>
          <li className="list-group-item">Worked with Temenos T24 core banking and Azure‑hosted applications.</li>
          <li className="list-group-item">Assisted with mobile and online banking operations—e.g., ZIPIT, bill payments.</li>
        </ul>
        <p>
          This role allowed me to bridge my programming knowledge with real-world finance systems. I saw firsthand how secure, scalable software powers
          accounts management, customer services, and digital transformation.
        </p>
      </section>

      <section>
        <h2>Programming & Technical Skills</h2>
        <p>
          Throughout my studies, I’ve deeply explored programming technologies across both mobile and web platforms. My development toolkit includes:
        </p>
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item">Object-Oriented Programming ( C#)</li>
          <li className="list-group-item">Web & Mobile Technologies (React.js, React Native, Flutter)</li>
          <li className="list-group-item">Database Systems (SQL, NoSQL)</li>
          <li className="list-group-item">Algorithms, Data Structures, and Software Engineering principles</li>
          <li className="list-group-item">Interest in AI/ML integration with finance systems</li>
        </ul>
      </section>
    </div>
  );
}

export default Experience;
