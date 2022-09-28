import React from "react";
import "./styles.css";

const Navbar = () => {
	const navLinks = [
		{
			name: "SHOP",
			href: "#",
		},
		{
			name: "COLLECTION",
			href: "#",
		},
	];

	return (
		<nav className="navbar">
			<div>
				{/* <img /> */}
				Logo
			</div>
			<ul>
				{navLinks.map((link) => {
					return (
						<a href={link.href}>
							{link.name}
						</a>
					);
				})}
			</ul>
			<div>Far Right</div>
		</nav>
	);
};

export default Navbar;
