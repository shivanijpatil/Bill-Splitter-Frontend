import React from 'react';
import { FaUsers } from 'react-icons/fa';
import './CreateGroupCard.css';

const CreateGroupCard1 = () => {
    return (
        <div className="card-wrapper">
            <div className="group-card">
                <FaUsers className="group-icon" />
                <p className="group-text">Add New Friends!</p>
            </div>
        </div>
    );
};

export default CreateGroupCard1;
