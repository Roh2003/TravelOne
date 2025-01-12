import React from "react";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Places from "./components/Places";


const HomePage = () => {
    return(
        <>
            <Home />
            <Discover />
            <Places />
            <Footer />
        </>

    );
};

export default HomePage;