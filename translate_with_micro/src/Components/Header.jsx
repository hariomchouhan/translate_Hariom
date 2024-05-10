import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/" className='fw-bold'>Hari ॐ</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                  Hari ॐ
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="https://github.com/hariomchouhan" target="_blank" className='fw-bold'>GitHub</Nav.Link>
                  <Nav.Link href="mailto:hariomchouhan430@gmail.com" target="_blank" className='fw-bold'>Mail</Nav.Link>
                  <Nav.Link href="https://www.linkedin.com/in/hariom-chouhan-ab6b7620a" target="_blank" className='fw-bold'>Twitter</Nav.Link>
                  <Nav.Link href="https://stackoverflow.com/users/19839122/hariom-chouhan" target="_blank" className='fw-bold'>Stackoverflow</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;