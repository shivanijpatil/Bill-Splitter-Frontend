import React from 'react';
import './WelcomeCard.css';
import dashboardcard from "../Assets/dashboardcard.png";

const WelcomeCard1 = () => {
    return (
        <div className="welcome-card">
            <div className="welcome-text">
                <h2>Hello! Good to see you!</h2>
                <p>
                    Easily manage shared expenses and keep track of everyone's contributions.
                    Settle balances seamlessly and enjoy a stress-free experience.
                </p>
                <button className="view-groups-button">Create Events</button>
            </div>
            <div className="welcome-image">
                <img
                    src={dashboardcard}
                    alt="Welcome Illustration"
                />
            </div>
        </div>
    );
};

export default WelcomeCard1;
