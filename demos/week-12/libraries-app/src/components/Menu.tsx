import {
    Container,
    Nav,
    Navbar
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand to="/" as={NavLink}>
                    <FontAwesomeIcon icon={faBook} className="me-2" />
                    Library App
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/home" as={NavLink}>Home</Nav.Link>
                        <Nav.Link to="/libraries" as={NavLink}>List of libraries</Nav.Link>
                        <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default Menu;