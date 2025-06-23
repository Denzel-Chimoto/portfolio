import ProjectHeader from "../../components/ProjectHeader";
import TechStackList from "../../components/TechStackList";
import ProjectOverview from "../../components/ProjectOverview";
import KeyPointsList from "../../components/KeyPointsList";
import ImageGallery from "../../components/ImageGallery";
import ExternalLinks from "../../components/ExternalLinks";
import image1 from '../../assets/nrzbook/nrzbookHome.jpg';
import image2 from '../../assets/nrzbook/nrzbookCargoPage.jpg';
import image3 from '../../assets/nrzbook/nrzbookNewBooking.jpg';

export default function NRZBOOKING() {
  const projectData = {
    title: "National Railways of Zimbabwe",
    year: "2023",
    role: "Solo Project",
    techStack: ["Flutter", "Dart", "Google Maps"],
    githubLink: "https://github.com/Denzel-Chimoto/NRZ-Booking",
    Platforms: "Android and IOS app",
  };

  const keyPoints = [
    { title: "Problem Solved", content: "Reducing pharmacy search time by 50% through AI-powered matching." },
    { title: "Features", content: "OCR-based prescription scanning, real-time inventory matching." },
  ];

  const images = [image1, image2,image3 ];
  const externalLinks = [{ name: "GitHub Repo", url: projectData.githubLink }, { name: "Live Demo", url: projectData.demoLink }];

  return (
    <div className="container py-5">
      <ProjectHeader {...projectData} />
      <TechStackList stack={projectData.techStack} />
      <ProjectOverview overview="A logistics platform focusing on a cheaper and taxable import stream in Zimbabwe." />
      <KeyPointsList items={keyPoints} />
      <ImageGallery images={images} />
      <ExternalLinks links={externalLinks} />
    </div>
  );
}
