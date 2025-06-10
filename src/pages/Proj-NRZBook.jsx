// src/pages/Home.tsx
import ProjectCard from '../components/ProjectCard';
import '../styles/Home.css';

const projectDescription ="A cargo carriage system for the National Railways of Zimbabwe";
const projectName ="NRZ Booking"

function NRZBook() {
  return (
    <div className="smart justify-content-center">
        <ProjectCard projname={projectName} description={projectDescription} buttonText={"See More"}/>
    </div>
  );
}

export default NRZBook;

