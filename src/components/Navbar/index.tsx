import React from 'react';
import {
	Nav,
	Navbar,
	NavbarBrand,
	NavItem,
	Collapse,
	NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function NavbarComponent() {
	return (
		<div>
			<Navbar color="dark" dark expand="md" fixed="top" full>
				<Link to="/home">
					<NavbarBrand>Star Wars</NavbarBrand>
				</Link>
				<Collapse navbar>
					<Nav className="me-auto" navbar>
						<Link to="/people">
							<NavItem>Pessoas</NavItem>
						</Link>
						<Link to="/planets">
							<NavItem>Planetas</NavItem>
						</Link>
					</Nav>
					<NavbarText>Simple Text</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default NavbarComponent;
