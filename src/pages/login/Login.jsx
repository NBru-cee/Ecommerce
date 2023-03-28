import "./login.css";
import React from "react";
import back from "../../assets/images/my-account.jpg";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

const Login = () => {
    const dispatch = useDispatch();
    document.title = "Login";
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authActions.login());
    };
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

                    <form onSubmit={handleSubmit}>
                        <span>Username or Email Address:</span>
                        <input type="text" required />
                        <span>Password *</span>
                        <input type="password" required />
                        <button className="button">Log in</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;
