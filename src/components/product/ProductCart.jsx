import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const ProductCart = ({ id, name, cover, price }) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.addToCart({ id, name, cover, price }));
    };
    return (
        <>
            <div className="box boxItems" id="product">
                <div className="img">
                    <Link>
                        <img src={cover} alt="cover" />
                    </Link>
                </div>
                <div className="details">
                    <h3>$ {price}</h3>
                    <p>{name}</p>
                    <button onClick={addToCart}>
                        <AiOutlinePlusCircle />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductCart;
