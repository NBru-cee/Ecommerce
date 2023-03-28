import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

const User = () => {
    const [profileOpen, setProfileOpen] = useState(false);
    const user = true;
    const close = () => {
        setProfileOpen(null);
    };
    const dispatch = useDispatch();
    document.title = "Login";
    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(authActions.logout());
    };
    
    return (
        <>
            <div className="profile">
                {user ? (
                    <>
                        <button
                            className="img"
                            onClick={() => setProfileOpen(!profileOpen)}
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                                alt="user"
                            />
                        </button>
                        {profileOpen && (
                            <div
                                className="openProfile boxItems"
                                onClick={close}
                            >
                                <div className="image">
                                    <Link to="/account">
                                        <div className="img">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                                                alt="user"
                                            />
                                        </div>
                                    </Link>
                                    <div className="text">
                                        <h4>Bruce Smith</h4>
                                        <label htmlFor="">
                                            Mukamira, Nyabihu
                                        </label>
                                    </div>
                                </div>
                                <Link to="/login">
                                    <button className="box">
                                        <IoMdSettings className="icon" />
                                        <h4>My Account</h4>
                                    </button>
                                </Link>
                                <button className="box">
                                    <BsBagCheck className="icon" />
                                    <h4>My Order</h4>
                                </button>
                                <button className="box">
                                    <AiOutlineHeart className="icon" />
                                    <h4>Wishlist</h4>
                                </button>
                                <button className="box">
                                    <GrHelp className="icon" />
                                    <h4>Help</h4>
                                </button>

                                <button className="box" onClick={logoutHandler}>
                                    <BiLogOut className="icon" />
                                    <h4>Logout</h4>
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <button>My Account</button>
                )}
            </div>
        </>
    );
};

export default User;
