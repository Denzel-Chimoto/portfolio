import ProjectHeader from "../../components/ProjectHeader";
import TechStackList from "../../components/TechStackList";
import ProjectOverview from "../../components/ProjectOverview";
import KeyPointsList from "../../components/KeyPointsList";
import ImageGallery from "../../components/ImageGallery";
import ExternalLinks from "../../components/ExternalLinks";
import sp_home from "../../assets/smart-pharm/sp_home.png";
import sp_login from "../../assets/smart-pharm/sp_login.jpg";
import sp_photo_upload from "../../assets/smart-pharm/sp_photo_upload.jpg";
import sp_web_login from "../../assets/smart-pharm/sp_web_login.png";
import sp_web_prescriptions from "../../assets/smart-pharm/sp_web_prescriptions.png";
import sp_web_postgre from "../../assets/smart-pharm/sp_web_postgre.png";



export default function SmartPharmacyPage() {
  const projectData = {
    title: "Smart Pharmacy Network",
    year: "2025",
    role: "Team Project",
    techStack: ["React", "React Native", "PostgreSQL", "EasyOCR", "FastAPI", "SqlAlchemy", "Deepseek R1 API"],
    githubLink: "https://github.com/Denzel-Chimoto/smart-pharmacy",

  };

  const keyPoints = [
    { title: "Problem Solved", content: "Reducing pharmacy search time by 50% through AI-powered matching." },
    { title: "Features", content: "OCR-based prescription scanning, real-time inventory matching." },
  ];

  const images = [sp_login,sp_home,sp_photo_upload,sp_web_login,sp_web_prescriptions,sp_web_postgre ];
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
