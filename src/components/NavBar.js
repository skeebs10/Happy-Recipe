import React from 'react';
import { NavLink } from 'react-router-dom';
// NavLink is a special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
import '../scss/Components/Navbar.scss';

const Navbar = () => {
	return (
		<div className="Navbar">
			<div>
				<NavLink to="/" className="Navbar__brand">
					Happy Recipe
				</NavLink>
			</div>
			<div>
				<NavLink to="/create-recipe" className="Navbar__title">
					Create
				</NavLink>
				<NavLink to="/" className="Navbar__title">
					Search
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
