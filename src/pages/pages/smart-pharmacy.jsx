import ProjectHeader from "@/components/ProjectHeader";
import ImageGallery from "@/components/ImageGallery";
import KeyPointsList from "@/components/KeyPointsList";

export default function SmartPharmacyPage() {
  const projectData = {
    title: "Smart Pharmacy with Online Prescription Processing",
    year: "2023",
    role: "Solo Project",
    techStack: ["React", "React Native", "PostgreSQL", "EasyOCR", "PyTorch", "OpenCV"],
    githubLink: "https://github.com/yourusername/smart-pharmacy",
    demoLink: "https://demo.smartpharmacy.com",
  };

  const keyPoints = [
    { title: "Problem Solved", content: "Patients waste hours searching pharmacies for medications. Pharmacies lose sales due to inventory mismatches." },
    { title: "Solution", content: "AI-powered marketplace matches prescriptions with pharmacy inventory in real-time." },
    { title: "Key Features", content: "OCR prescription scanning, geolocation-based pharmacy matching, secure medication delivery tracking." },
    { title: "Impact", content: "Reduced medication search time by 50% in pilot tests with 3 pharmacies in Harare." }
  ];

  const images = [
    "/projects/smart-pharmacy-1.jpg",
    "/projects/smart-pharmacy-2.jpg",
    "/projects/smart-pharmacy-3.jpg",
  ];

  return (
    <div className="container py-5">
      <ProjectHeader {...projectData} />
      
      <section className="mb-5">
        <h2 className="h4 fw-semibold mb-3 text-dark">Overview</h2>
        <p className="text-muted">
          A digital marketplace connecting patients with pharmacies that have their prescribed 
          medications in stock. Uses OCR technology to digitize paper prescriptions and 
          machine learning to match with pharmacy inventory in real-time while maintaining 
          strict HIPAA-compliant data privacy.
        </p>
      </section>

      <section className="mb-5">
        <ImageGallery images={images} />
      </section>

      <section className="mb-5">
        <KeyPointsList items={keyPoints} />
      </section>

      <section>
        <h2 className="h4 fw-semibold mb-3 text-dark">Technical Details</h2>
        <ul className="list-group">
          <li className="list-group-item">React Native frontend with custom camera integration for prescription capture.</li>
          <li className="list-group-item">Python backend with PyTorch for OCR model trained on Zimbabwean prescriptions.</li>
          <li className="list-group-item">PostgreSQL database with full-text search for medication inventory.</li>
          <li className="list-group-item">Twilio API for SMS notifications to patients and pharmacies.</li>
        </ul>
      </section>
    </div>
  );
}
