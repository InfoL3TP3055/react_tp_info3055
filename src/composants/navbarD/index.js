import React from 'react' ;
import { Navbar, Nav, Container} from 'react-bootstrap';

const NavigationD = () => {
    return(
        <>
         <Navbar collapseOnSelect expand="lg" fixed="top" style={{backgroundColor: "#01D758",boxShadow: "0px 0px 15px darkgray"}}>
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
  </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    );
};


export default NavigationD;

                      
