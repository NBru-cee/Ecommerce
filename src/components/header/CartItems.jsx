import React from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const CartItems = ({  cover, price, quantity, totalPrice, name }) => {
    return (
        <>
            <div className="cardList">
                <div className="cartContent">
                    <div className="img">
                        <img src={cover} alt="image" />
                        <button className="remove flexCenter">
                            <AiOutlineClose />
                        </button>
                    </div>
                    <div className="details">
                        <p>{name}</p>
                        <label>Unit Price ${price}</label>
                        <div className="price">
                            <div className="qty flexCenter">
                                <button className="plus">
                                    <AiOutlinePlus />
                                </button>
                                <button className="num">{quantity}</button>
                                <button className="minus">
                                    <AiOutlineMinus />
                                </button>
                            </div>
                            <div className="priceTitle">${totalPrice}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItems;
