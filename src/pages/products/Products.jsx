import React from "react";
import { products } from "../../data";
import { BsCart2 } from "react-icons/bs";
import "./Products.css";

const Products = () => {
    return (
        <div className="products-page">
            <div className="container">
                <div className="products-container">
                    {products.map((product) => (
                        <div className="single-product" key={product.id}>
                            <div className="p-card-header">
                                <img src={product.img} alt={product.name} />
                            </div>
                            <div className="p-card-title">
                                <h3 className="product-title">{product.name}</h3>
                                <span>$ {product.price}</span>
                            </div>
                            <div className="p-card-desc">{product.description}</div>
                            <div className="single-product-btn">
                                <BsCart2 /> <span>Buy Now</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
