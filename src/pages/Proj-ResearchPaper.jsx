// src/pages/Home.tsx
import ProjectCard from '../components/ProjectCard';
import '../styles/Home.css';

const projectDescription ="Improving the Manual Reconciliations Process";
const projectName ="CABS Manual Reconciliations"

function CABSManuals() {
  return (
    <div className="smart justify-content-center">
        <ProjectCard projname={projectName} description={projectDescription} buttonText={"See More"}/>
    </div>
  );
}

export default CABSManuals;

