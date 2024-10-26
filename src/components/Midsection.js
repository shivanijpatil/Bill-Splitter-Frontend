import React from 'react';
import Midsection1 from "./Assets/Midsection1.jpg";

const Midsection = () => {
    return (
        <div className="container_Navbar" style={{ width: "100%", marginTop: "50px", marginBottom: "0px" }}>
            <img
                src={Midsection1}
                className="logo"
                alt="Logo"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
            />
        </div>
    );
}

export default Midsection;
