import React from "react";
import "../styles/ContactLinks.css";

function ContactLinks() {
  return (
    <div className="container-fluid fixed-bottom text-start ps-3 pb-3">
      <div className="d-flex gap-3">
        <a href="#" className="text-secondary">LinkedIn</a>
        <a href="#" className="text-secondary">GitHub</a>
        <a href="#" className="text-secondary">Discord</a>
        <a href="#" className="text-secondary">CodeForces</a>
      </div>
    </div>
  );
}

export default ContactLinks;
