import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Summary = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the backend when the component mounts
        const fetchData = async () => {
            try {
                const response = await axios.get('https://billsplitterbackend.onrender.com/events');
                setEvents(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Summary</h2>
            {events.length > 0 ? (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={headerStyle}>Event Name</th>
                            <th style={headerStyle}>Total Bill</th>
                            <th style={headerStyle}>Participants</th>
                            <th style={headerStyle}>Expenses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, index) => (
                            <tr key={index}>
                                <td style={cellStyle}>{event.eventName}</td>
                                <td style={cellStyle}>{event.totalBill}</td>
                                <td style={cellStyle}>
                                    <ul style={{ paddingLeft: '1.2rem' }}>
                                        {event.participants.map((participant, i) => (
                                            <li key={i}>{participant.name}: {participant.share}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td style={cellStyle}>
                                    <ul style={{ paddingLeft: '1.2rem' }}>
                                        {event.expenses.map((expense, i) => (
                                            <li key={i}>{expense.name}: {expense.total}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No events available</p>
            )}
        </div>
    );
};

// Table Cell Style
const headerStyle = {
    border: '1px solid black',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
    textAlign: 'center'
};

const cellStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left'
};

export default Summary;
