import React from "react";

const NavBar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<span className="navbar-brand mb-0 h1">Total Itmes {totalCounters}</span>
		</nav>
	);
};

export default NavBar;
