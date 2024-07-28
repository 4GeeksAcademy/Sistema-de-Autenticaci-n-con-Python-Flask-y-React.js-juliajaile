import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Signup.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export const Signup = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isActive, setIsActive] = useState(true);
    const navigate = useNavigate();

    const signUp = async (email, password, isActive) => {
        await actions.signUp(email, password, isActive);
        navigate('/login');

    }

    return (
        <div className="container">
            <div className="d-flex flex-column signUp-card w-50">
                <div className="p-4">
                    <h1 className="display-4 jaro-h1">Create an account</h1>
                    <p className="text-secondary">
                        Already have one?
                        <Link to="/login" className="text-danger fw-bold text-decoration-none">
                            Sign in
                        </Link>
                    </p>
                    <div>
                        <div className="form-group mt-2">
                            <label for="exampleInputEmail1"><MdOutlineAlternateEmail /></label>
                            <input type="email" className="form-control" placeholder="Enter an email address" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className="form-group mt-2">
                            <label for="exampleInputPassword1"><RiLockPasswordLine /></label>
                            <input type="password" className="form-control" placeholder="Enter a password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                        <input type="check" style={{ display: "none" }} aria-label="active" onChange={(e) => setIsActive(e.target.value)} value={isActive} />
                        <button type="submit" className="btn btn-primary w-100 mt-4 shadow-lg" onSubmit={() => signUp(email, password, isActive)}>Sign Up</button>
                        <p className="text-secondary pb-5">Don't you have an account? <Link to="/" className="text-danger fw-bold text-decoration-none">Sign in!</Link></p>
                    </div>
                </div>
            </div>
        </div>

    );
};