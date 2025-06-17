import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/UnderConstruction.css'; // We'll keep some custom CSS for animations

const UnderConstruction = () => {
  const [show, setShow] = React.useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal 
      show={show} 
      onHide={handleClose}
      centered
      backdrop="static"
      keyboard={false}
      className="under-construction-modal"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="w-100 text-center">Under Construction</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <div className="gear-container mb-4">
          <div className="gear gear-large">
            <div className="gear-inner">
              {[...Array(8)].map((_, i) => <div key={i} className="gear-tooth"></div>)}
            </div>
          </div>
          <div className="gear gear-small">
            <div className="gear-inner">
              {[...Array(6)].map((_, i) => <div key={i} className="gear-tooth"></div>)}
            </div>
          </div>
        </div>
        <p className="lead">My portfolio is currently in development. Check back soon!</p>
      </Modal.Body>
      <Modal.Footer className="border-0 justify-content-center">
        {/* <Button variant="dark" onClick={handleClose}>
          Close
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default UnderConstruction;