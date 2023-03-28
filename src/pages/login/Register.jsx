import React from "react";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";
import "./login.css";

const Register = () => {
    document.title = "Register";
    return (
        <>
            <section className="login">
                <div className="container">
                    <div className="backImg">
                        <img src={back} alt="back" />
                        <div className="text">
                            <h3>Register</h3>
                            <h1>My Account</h1>
                        </div>
                    </div>

                    <form>
                        <span>Email Address:</span>
                        <input type="text" required />
                        <span>Username *</span>
                        <input type="text" required />
                        <span>Password *</span>
                        <input type="password" required />
                        <span>Confirm Password *</span>
                        <input type="password" required />
                        <button className="button">Register</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Register;
