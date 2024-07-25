import React from "react";
import { } from "react-router-dom";
import "../../styles/Signup.css";

export const Signup = () => {
    return (
        <div className="container">
            <div className="d-flex flex-column signUp-card w-50">
                <div className="p-4">
                    <h1 className="display-4 jaro-h1">Get started</h1>
                    <p className="text-secondary">Already have an account? Sign in</p>
                    <div>
                        <div className="form-group mt-2">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter an email" />
                        </div>
                        <div className="form-group mt-2">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-4 shadow-lg">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>

    );
};