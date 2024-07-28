import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Go to Signup!</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-primary">Go to Login!</button>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/private">
						<button className="btn btn-primary">Your private zone!</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
