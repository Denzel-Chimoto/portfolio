import React from "react";
import "../styles/ContactLinks.css";

function ContactLinks() {
  return (
    <div className="container-fluid fixed-bottom text-start ps-3 pb-3">
      <div className="d-flex gap-3">
        <a href="https://www.linkedin.com/in/tofara-denzel-chimoto-9042a8297" className="text-secondary" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/Denzel-Chimoto" className="text-secondary" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://discord.com/users/your-discord-id" className="text-secondary" target="_blank" rel="noopener noreferrer">
          Discord
        </a>
        <a className="text-secondary" target="_blank" rel="noopener noreferrer">
          CodeForces ID: denzelFlames
        </a>
      </div>
    </div>
  );
}

export default ContactLinks;
