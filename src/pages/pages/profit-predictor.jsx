import ProjectHeader from "../../components/ProjectHeader";
import TechStackList from "../../components/TechStackList";
import ProjectOverview from "../../components/ProjectOverview";
import KeyPointsList from "../../components/KeyPointsList";
import ImageGallery from "../../components/ImageGallery";
import ExternalLinks from "../../components/ExternalLinks";

export default function ProfitPredictor() {
  const projectData = {
    title: "SME Profit Predictor",
    year: "2025",
    role: "Solo Project",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "PyTorch", "OpenCV"],
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
      <ProjectOverview overview="ML model predicting if business idea will succeed in the Zimbabwean Economy" />
      <KeyPointsList items={keyPoints} />
      <ImageGallery images={images} />
      <ExternalLinks links={externalLinks} />
    </div>
  );
}
