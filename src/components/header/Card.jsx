import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import "./header.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const Card = () => {
    const [cardOpen, setCardOpen] = useState(false);
    const closeCard = () => {
        setCardOpen(null);
    };
    const quantity = useSelector((state) => state.cart.totalQuantity);

    const cartItems = useSelector((state) => state.cart.itemsList);

    let total = 0;
    const itemsList = useSelector((state) => state.cart.itemsList);
    itemsList.forEach((item) => {
        total += item.totalPrice;
    });
    return (
        <>
            <div className="card" onClick={() => setCardOpen(!cardOpen)}>
                <BiShoppingBag className="cardIcon" />
                <span className="flexCenter">{quantity}</span>
            </div>
            <div className={cardOpen ? "overlay" : "nonoverlay"}></div>
            <div className={cardOpen ? "cartItem" : "cardhide"}>
                <div className="title flex">
                    <h2>Shopping Cart</h2>
                    <button onClick={closeCard}>
                        <AiOutlineClose className="close" />
                    </button>
                </div>
                {cartItems.map((item) => (
                    <CartItems
                        key={item.id}
                        cover={item.cover}
                        name={item.name}
                        price={item.price}
                        quantity={item.qty}
                        totalPrice={item.totalPrice}
                    />
                ))}
                <div className="checkOut">
                    <button>
                        <span>Priceed To Checkout</span>
                        <label>$ {total}</label>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Card;
