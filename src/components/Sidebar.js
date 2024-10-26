import React from 'react';
import { MdGroups } from "react-icons/md";
import { AiTwotoneCalculator } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { LuActivitySquare } from "react-icons/lu";


const Sidebar = ({ setActiveComponent }) => {
    return (
        <div className="sidebar">

            <div className="sidebar-item" onClick={() => setActiveComponent('event')}>
                <div className="icon-container">
                    <MdGroups size={24} />
                </div>
                <span>New Event</span>
            </div>


            <div className="sidebar-item" onClick={() => setActiveComponent('expense')}>
                <div className="icon-container">
                    <AiTwotoneCalculator size={24} />
                </div>
                <span>Add Expense</span>
            </div>


            {/* <div className="sidebar-item" onClick={() => setActiveComponent('friends')}>
                <div className="icon-container">
                    <MdGroups size={24} />
                </div>
                <span>Friends</span>
            </div> */}


            <div className="sidebar-item" onClick={() => setActiveComponent('settle')}>
                <div className="icon-container">
                    <IoMdPerson size={22} />
                </div>
                <span>Settle Balance</span>
            </div>


            <div className="sidebar-item" onClick={() => setActiveComponent('summary')}>
                <div className="icon-container">
                    <LuActivitySquare size={24} />
                </div>
                <span>Summary</span>
            </div>
        </div>
    );
};

export default Sidebar;
