import React from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
const CartItems = ({ id, cover, price, quantity, totalPrice, name }) => {
    const dispatch = useDispatch();
    const inCartItems = () => {
        dispatch(cartActions.addToCart({ id, name, price }));
    };

    const desCartItems = () => {
        dispatch(cartActions.removeFromCart({ id }));
    };
    return (
        <>
            <div className="cardList" key={id}>
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
                                <button className="plus" onClick={inCartItems}>
                                    <AiOutlinePlus />
                                </button>
                                <button className="num">{quantity}</button>
                                <button
                                    className="minus"
                                    onClick={desCartItems}
                                >
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
