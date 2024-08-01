import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import imagination from "../../img/imagine.png";
import "../../styles/Private.css";

export const Private = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => {
		if (!store.token) {
			navigate('/login');
		}
	}, [store.token, navigate]);

	const logOut = () => {
		actions.logOut();
		navigate('/login');
	}

	return (
		<div className="container">
			<div className="jumbotron w-75 bg-light mt-5 p-3 rounded">
				<div className="sign-out">
					<h1 className="display-4 jaro-h1">Welcome to your private area!</h1>
					<button onClick={() => logOut()} className="btn btn-danger logOut">Log out</button>
				</div>
				<p className="lead">This is private space for you, where you can unleash your creativity!</p>
				<hr className="my-4" />
				<img className="imagination" src={imagination} />
				<a className="btn btn-warning btn-lg button" href="#" role="button">Start creating!👽</a>
			</div>
		</div>

	);
};

