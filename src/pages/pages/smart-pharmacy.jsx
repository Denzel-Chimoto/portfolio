import ProjectHeader from "../../components/ProjectHeader";
import TechStackList from "../../components/TechStackList";
import ProjectOverview from "../../components/ProjectOverview";
import KeyPointsList from "../../components/KeyPointsList";
import ImageGallery from "../../components/ImageGallery";
import ExternalLinks from "../../components/ExternalLinks";
import sp_home from "../../assets/smart-pharm/sp_home.png";
import sp_login from "../../assets/smart-pharm/sp_login.jpg";
import sp_photo_upload from "../../assets/smart-pharm/sp_photo_upload.jpg";




export default function SmartPharmacyPage() {
  const projectData = {
    title: "Smart Pharmacy Network",
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

  const images = [sp_login,sp_home,sp_photo_upload ];
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
