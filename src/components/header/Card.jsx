import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import "./header.css";
const Card = () => {
    const [cardOpen, setCardOpen] = useState(false);
    const closeCard = () => {
        setCardOpen(null);
    };

    return (
        <>
            <div className="card" onClick={() => setCardOpen(!cardOpen)}>
                <BiShoppingBag className="cardIcon" />
                <span className="flexCenter">2</span>
            </div>
            <div className={cardOpen ? "overlay" : "nonoverlay"}></div>
            <div className={cardOpen ? "cartItem" : "cardhide"}>
                <div className="title flex">
                    <h2>Shopping Cart</h2>
                </div>
            </div>
        </>
    );
};

export default Card;
