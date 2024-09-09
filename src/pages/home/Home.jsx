import React, { useEffect, useState } from "react";
import Cover from "../../components/cover/Cover";
import Offers from "../../components/offers/Offers";
import Reviews from "../../components/reviews/Reviews";
import TrendingProducts from "../../components/trendingProducts/TrendingProducts";
import { products, reviews } from "../../data";
import "./Home.css";

const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    useEffect(() => {
        setTrendingProducts(products.splice(0, 4));
    }, []);
    return (
        <main className="home">
            <Cover />
            <Offers />
            <TrendingProducts trendingProducts={trendingProducts} />
            <Reviews reviews={reviews} />
        </main>
    );
};

export default Home;
