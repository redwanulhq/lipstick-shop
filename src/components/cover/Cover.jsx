import React from "react";
import { Link } from "react-router-dom";
import "./Cover.css";

const Cover = () => {
    return (
        <div className="cover">
            <div className="container">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://cdn.shopify.com/s/files/1/2644/9976/t/3/assets/slideshow_1.jpg?v=17333038905556912491"
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption caption-1">
                                <div>
                                    <h5>Bright Moving Lips</h5>
                                    <p>BEAUTY PRODUCTS</p>
                                    <p>COSMETICS</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://cdn.shopify.com/s/files/1/2644/9976/t/3/assets/slideshow_3.jpg?v=2260914561566215886"
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption caption-2">
                                <div>
                                    <h5>Perfect Rogue</h5>
                                    <p>Ultra Smooth</p>
                                    <p>Lip Cream</p>
                                    <Link to="/products" className="cover-btn">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://cdn.shopify.com/s/files/1/2644/9976/t/3/assets/slideshow_4.jpg?v=18103829802163136315"
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption caption-3">
                                <div>
                                    <h5>Summer Lipstick Guide</h5>
                                    <Link to="/products" className="cover-btn">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
