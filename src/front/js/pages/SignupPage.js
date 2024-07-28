import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Signup } from "../component/Signup";

export const SignupPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Signup />
		</div>
	);
};
