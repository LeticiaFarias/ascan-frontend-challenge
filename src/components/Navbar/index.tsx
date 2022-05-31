import React from "react";
import {
	Nav,
	Navbar,
	NavbarBrand,
	NavLink,
	Collapse,
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

function NavbarComponent() {
	return (
		<div>
			<Navbar color="dark" dark expand="md" fixed="top" full>
				<NavbarBrand style={{color: "#FFEE32"}} tag={RRNavLink} to="/home">
					Star Wars
				</NavbarBrand>
				<Collapse navbar>
					<Nav className="me-auto" navbar>
						<NavLink style={{color: "#FFF"}} tag={RRNavLink} to="/peoples">
							Pessoas
						</NavLink>
						<NavLink style={{color: "#FFF"}} tag={RRNavLink} to="/planets">
							Planetas
						</NavLink>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default NavbarComponent;
