import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Midsection from "./Midsection";

function Landingsplit() {
    return (
        <div className="landingsplit-container">
            <Navbar />
            <Midsection />
            <Footer />
        </div>
    );
}

export default Landingsplit;
