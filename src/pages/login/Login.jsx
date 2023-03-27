import "./login.css";
import React from "react";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";
const Login = () => {
    document.title = "Login";
    return (
        <>
            <section className="login">
                <div className="container">
                    <div className="backImg">
                        <img src={back} alt="back" />
                        <div className="text">
                            <h3>Login</h3>
                            <h1>My Account</h1>
                        </div>
                    </div>

                    <form>
                        <span>Username or Email Address:</span>
                        <input type="text" required />
                        <span>Password *</span>
                        <input type="password" required />
                        <button className="button">Sign in</button>
                        <Link to="/register">Signup</Link>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;
