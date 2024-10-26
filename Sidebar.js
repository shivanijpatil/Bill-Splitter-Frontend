import React from 'react';
import PerformanceAnalysis from './PerformanceAnalysis';
import Tickets from './Tickets';
import Quiz from './Quiz/Quiz1';
import { TfiDashboard } from "react-icons/tfi";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaTicketAlt } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
    // Function to navigate to a specific path
    const navigate = (path) => {
        window.location.href = path;
    };


    return (
        <div className="sidebar">

            <a className="sidebar-link" style={{ fontSize: '40px' }} onClick={() => navigate('/Dashboard')}>
                <GrDocumentPerformance />
                <span className="link-text" style={{ fontSize: '20px' }}>PerformanceAnalysis</span>
            </a>


            <a className="sidebar-link" style={{ fontSize: '40px' }} onClick={() => navigate('/Tickets')}>
                <FaTicketAlt />
                <span className="link-text" style={{ fontSize: '20px' }}>Tickets</span>
            </a>


            <a className="sidebar-link" style={{ fontSize: '40px' }} onClick={() => navigate('/Quiz')}>
                <MdQuiz />
                <span className="link-text" style={{ fontSize: '20px' }}>Quiz</span>

            </a>


            <a className="sidebar-link" style={{ fontSize: '40px' }} onClick={() => navigate('/Result')}>
                <TfiDashboard />
                <span className="link-text" style={{ fontSize: '20px' }}>Results</span>
            </a>

            {/* Link to Settings */}
            <a className="sidebar-link" style={{ fontSize: '40px' }} onClick={() => navigate('/Settings')}>
                <CiSettings />
                <span className="link-text" style={{ fontSize: '20px' }}>Settings</span>
            </a>
        </div>
    );
}

export default Sidebar;

