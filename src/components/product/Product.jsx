import React from "react";
import "./product.css";
import { product } from "../../assets/data/data";
import ProductCart from "./ProductCart";

const Product = () => {
    return (
        <>
            <section className="product">
                <div className="container grid3">
                    {product.map((item) => (
                        <ProductCart
                            key={item.id}
                            id={item.id}
                            cover={item.cover}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Product;
