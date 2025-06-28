import ProjectHeader from "../../components/ProjectHeader";
import TechStackList from "../../components/TechStackList";
import ProjectOverview from "../../components/ProjectOverview";
import KeyPointsList from "../../components/KeyPointsList";
import ImageGallery from "../../components/ImageGallery";
import ExternalLinks from "../../components/ExternalLinks";
import home_dash from "../../assets/profit_predictor/home_dash.png"

export default function ProfitPredictor() {
  const projectData = {
    title: "SME Profit Predictor",
    year: "2025",
    role: "Solo Project",
    techStack: ["Python 3.x", "Scikit-learn", "Matplotlib", "Random Forest", "Seaborn", "Streamlit", "Joblib"],
    githubLink: "https://github.com/Denzel-Chimoto/ProfitPredictor_zw",
    // demoLink: "https://demo.smartpharmacy.com"
  };

  const keyPoints = [
    { title: "Problem Solved", content: "Predicting the profitability of small and medium enterprises (SMEs) in Zimbabwe." },
    { title: "Features", content: "Utilizes a machine learning model trained on historical data to forecast business success." },
  ];

  const images = [{home_dash}, "/smartpharmacy2.jpg"];
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
