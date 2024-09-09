import React from "react";
import "./Reviews.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Reviews = ({ reviews }) => {
    return (
        <div className="reviews">
            <div className="contain">
                <h2 className="section-title">Customer's Reviews</h2>
                <div className="reviews-slider">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            {reviews.map((review) => (
                                <div class={review.id === 1 ? "carousel-item active" : "carousel-item"}>
                                    <div class="carousel-content">
                                        <img
                                            src={`https://avatars.dicebear.com/api/avataaars/${review.name}.svg?style=circle&top[]=longButNotTooLong&top[]=longHair&hairColor[]=black&facialHairChance=0&mouth[]=smile&skin[]=light`}
                                            alt="..."
                                        />
                                        <h4>
                                            {review.name} | <span>{review.email}</span>
                                        </h4>

                                        <p>{review.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                        >
                            <GrPrevious />
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                        >
                            <GrNext />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
