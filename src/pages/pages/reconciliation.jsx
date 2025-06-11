import ProjectHeader from "../../components/ProjectHeader";
import TechStackList from "../../components/TechStackList";
import ProjectOverview from "../../components/ProjectOverview";
import KeyPointsList from "../../components/KeyPointsList";
import ImageGallery from "../../components/ImageGallery";
import ExternalLinks from "../../components/ExternalLinks";

export default function CABSMANUALS() {
  const projectData = {
    title: "MAnual Reconciliation System",
    year: "2023",
    role: "Solo Project",
    techStack: ["React", "React Native", "PostgreSQL", "EasyOCR", "PyTorch", "OpenCV"],
    githubLink: "https://github.com/yourusername/smart-pharmacy",
    demoLink: "https://demo.smartpharmacy.com",
  };

  const keyPoints = [
    { title: "Problem Solved", content: "Reducing pharmacy search time by 50% through AI-powered matching." },
    { title: "Features", content: "OCR-based prescription scanning, real-time inventory matching." },
  ];

  const images = ["/smartpharmacy1.jpg", "/smartpharmacy2.jpg"];
  const externalLinks = [{ name: "GitHub Repo", url: projectData.githubLink }, { name: "Live Demo", url: projectData.demoLink }];

  return (
    <div className="container py-5">
      <ProjectHeader {...projectData} />
      <TechStackList stack={projectData.techStack} />
      <ProjectOverview overview="An AI-powered marketplace connecting patients with pharmacies." />
      <KeyPointsList items={keyPoints} />
      <ImageGallery images={images} />
      <ExternalLinks links={externalLinks} />
    </div>
  );
}
