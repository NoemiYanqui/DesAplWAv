import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import imgLogo from '../../assets/img/logo-tecsup.png';

const Header = props => {
	return (
		<Navbar bg="dark" expand="lg" variant="dark" id="header">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img src={imgLogo} alt="Tecsup Logo" />
					Tecsup APP
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<Nav>
						<NavLink to="/" exact className="nav-link">
							Inicio
						</NavLink>
						{props.isAuthenticated ? (
							<NavDropdown title="Usuario" id="basic-nav-dropdown">
								<NavLink to="/profile" className="dropdown-item">
									Mi Perfil
								</NavLink>
								<NavLink to="/chat" className="dropdown-item">
									Chat
								</NavLink>
								<NavDropdown.Divider />
								<NavLink to="/logout" exact className="nav-link">
									Cerrar Sesión
								</NavLink>
							</NavDropdown>
						) : (
							<NavLink to="/login" exact className="nav-link">
								Iniciar Sesión
							</NavLink>
						)}
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};
const mapStateToProps = state => {
	return {
		isAuthenticated: state.token !== null
	};
};
export default connect(mapStateToProps)(Header);
