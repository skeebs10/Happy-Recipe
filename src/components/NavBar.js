import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Components/Navbar.scss';

const Navbar = () => {
	return (
		<div className="Navbar">
			<Link to="/create-recipe" className="Navbar-title">
				Create Recipe
			</Link>
			<Link to="/" className="Navbar-title">
				Recipe Search
			</Link>
		</div>
	);
};

export default Navbar;
