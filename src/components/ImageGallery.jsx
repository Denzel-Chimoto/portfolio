import { useState } from "react";
import { Modal, Button } from "react-bootstrap";


export default function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="row g-3">
      {images.map((src, index) => (
        <div key={index} className="col-md-4">
          <div className="card shadow-sm">
            <img
              src={src}
              alt={`Project screenshot ${index + 1}`}
              className="card-img-top"
              onClick={() => setSelectedImage(src)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      ))}

      <Modal show={!!selectedImage} onHide={() => setSelectedImage(null)} centered>
        <Modal.Body>
          <img src={selectedImage!} alt="Preview" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedImage(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
