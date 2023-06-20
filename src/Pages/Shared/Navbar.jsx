import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-white">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href='' >Home</Nav.Link>
                            <Nav.Link href='/filter' > Find </Nav.Link>
                            <Nav.Link href='' >Pricing</Nav.Link>
                            <Button style={{ backgroundColor: '#1C02BD' }} className='text-white fw-medium'>CONTACT US</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenu;