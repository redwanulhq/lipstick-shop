import React from "react";
import "./TrendingProducts.css";
import { BsCart2 } from "react-icons/bs";

const TrendingProducts = ({ trendingProducts }) => {
    return (
        <div className="trending-products">
            <div className="container">
                <h2 className="section-title">Trending Products</h2>
                <div className="trending-products-container">
                    {trendingProducts.map((product) => (
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

export default TrendingProducts;
