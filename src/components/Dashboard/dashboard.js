import React, { useState } from 'react';
import Sidebar from "../Sidebar";
import EventForm from "../Events/EventForm";
import ExpenseForm1 from "../Expense/ExpenseForm";
import WelcomeCard from "../WelcomeCard/WelcomeCard";
import CreateGroupCard1 from "../GroupCard/CreateGroupCard";
import Navbardashboard from '../NavbarDashboard';
import Summary from '../Summary';


const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState('welcome');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'welcome':
                return <WelcomeCard />;
            case 'event':
                return <EventForm />;
            case 'expense':
                return <ExpenseForm1 />;
            // case 'friends':
            //     return <CreateGroupCard1 />;
            case 'settle':
                return <div>Settle Component</div>;
            case 'summary':
                return <Summary />;

            default:
                return <WelcomeCard />;
        }
    };

    return (
        <div className="dashboard-container">
            <Navbardashboard />
            <Sidebar setActiveComponent={setActiveComponent} />
            <div className="content-container">
                {renderComponent()}
            </div>
        </div>
    );
};

export default Dashboard;
