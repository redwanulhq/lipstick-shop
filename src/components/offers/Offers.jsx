import React from "react";
import { Link } from "react-router-dom";
import "./Offers.css";

const Offers = () => {
    return (
        <div className="offers">
            <div className="container">
                <div className="offers-grid-1">
                    <div className="offers-img-container">
                        <Link to="/products">
                            <img
                                src="https://cdn.shopify.com/s/files/1/2644/9976/files/banner1_a887568a-d8e0-41bc-b12f-60b299d1e886.jpg?v=1516442887"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="offers-img-container">
                        <Link to="/products">
                            <img
                                src="https://cdn.shopify.com/s/files/1/2644/9976/files/banner2_ab7feea9-4311-49e9-bd7e-c3b4068000eb.jpg?v=1517299996"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
                <div className="offers-grid-2">
                    <div className="offers-img-container">
                        <Link to="/products">
                            <img
                                src="https://cdn.shopify.com/s/files/1/2644/9976/files/banner3.jpg?v=1516443069"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="offers-img-container">
                        <Link to="/products">
                            <img
                                src="https://cdn.shopify.com/s/files/1/2644/9976/files/banner4.jpg?v=1516443076"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;
