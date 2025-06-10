// src/pages/Home.tsx
import ProjectCard from '../components/ProjectCard';
import '../styles/Home.css';

const projectDescription ="A Smart Pharmacy Network";
const projectName ="Smart Pharmacy"

function SmartPharm() {
  return (
    <div className="smart justify-content-center">
        <ProjectCard projname={projectName} description={projectDescription} buttonText={"See More"}/>
    </div>
  );
}

export default SmartPharm;

