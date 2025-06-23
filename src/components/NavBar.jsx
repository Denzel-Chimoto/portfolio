import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import '../styles/NavBar.css';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="inherit" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <div className="my-logo">D</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/about"><span className='number-tag'>01.</span> About</Nav.Link>
            <Nav.Link href="#experience"> <span className='number-tag'>02.</span>Experience</Nav.Link>

            <NavDropdown title="03. Projects" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/smartpharm">Smart Pharmacy Network</NavDropdown.Item>
              {/*<NavDropdown.Item href="/cabsmanuals">Research Paper on Manual Reconciliations</NavDropdown.Item>
              <NavDropdown.Item href="/profpredictor"> Profit Predictor </NavDropdown.Item>*/}
              <NavDropdown.Item href="/nrzbooking"> NRZ Booking </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/Denzel-Chimoto/">Go to my Github</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="https://wa.me/?text=Hie%Denzel.%Kindly%send%20your%20resume.%I'm%from-" target="_blank" rel="noopener noreferrer"><span className='number-tag'>04.</span>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;