import React from "react";
import Navbar from "./Navbar";

const NonAuthLayout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};

export default NonAuthLayout;
