import React from "react";
import { } from "react-router-dom";
import backgroundPic from "../../img/background-signup.png";
import "../../styles/Singup.css";

export const Singup = () => {
    return (
        <div className="container-fluid">
            <div className="jumbotron">
                <div className="d-flex flex-row">
                    <h1 className="display-4">Get started</h1>
                    <p className="text-secondary">Already have an account?Sign in</p>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Sign Up</button>
                    </form>
                </div>
                <div className="d-flex flex-row">
                    <img className="bg right-pic" src={backgroundPic} />
                    <h3 className="text-light">Have your own personal website</h3>
                </div>
            </div>
        </div>

    );
};