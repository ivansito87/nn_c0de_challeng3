import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class NavigationBar extends React.Component {
    render() {
        let data = this.props.data;

        return (
            <Navbar bg="white">
                <Navbar.Brand href="https://www.cnn.com/">
                    <img
                        src={require('../assets/cnn_image.png')}
                        width="120"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Live TV</Nav.Link>
                    <Nav.Link href="#link">Articles</Nav.Link>
                    <NavDropdown title="Edition" id="basic-nav-dropdown">
                        <NavDropdown.Item href="">Live TV
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Edition</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Articles</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;