import React from 'react' ;
import { Navbar, Nav, Container} from 'react-bootstrap';

const Navigation = () => {
    return(
        <>
         <Navbar collapseOnSelect expand="lg" fixed="top" style={{backgroundColor: "#01D758"}}>
  <Container>
  <Navbar.Brand href="#home" >House-Location</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto fw-bold ">
      <Nav.Link href="#" className='text-white'>Accueil</Nav.Link>
      <Nav.Link href="#" className='text-white'>Avantages</Nav.Link>
      <Nav.Link href="#" className='text-white'>Reservation</Nav.Link>
      
      <Nav.Link href="#" className='text-white'>Contact</Nav.Link>

    </Nav>
    <Nav className="" >
      <Nav.Link href="/inscription" className='Btn bg-white fw-bold text-success rounded me-2'>Inscription</Nav.Link>
      <Nav.Link eventKey={2} href="/connexion" className='Btn bg-white fw-bold text-success rounded '>Connexion</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    );
};


export default Navigation;

                      
