import React from 'react';
import { Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap';

class NavigationBar extends React.Component {
	render() {
		return (
			<Navbar bg="white">
				<Navbar.Brand href="https://www.cnn.com/">
					<img
						src={require('../assets/cnn_image.png')}
						width="120"
						alt="Beautiful Logo"
						height="50"
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				<Nav className="ml-auto">
					<Nav.Link href="/live-stream">
						<Badge variant="danger" style={{ marginBottom: '5px' }}>
							{' '}
						</Badge>Live Stream
                    </Nav.Link>
					<Nav.Link href="/">Home</Nav.Link>
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