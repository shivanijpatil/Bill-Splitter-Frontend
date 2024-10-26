import React, { useState } from 'react';
import axios from 'axios';
import './EventForm.css'; // Import the CSS file

const EventForm = () => {
    const [eventName, setEventName] = useState('');
    const [participants, setParticipants] = useState(['']);
    const [totalBill, setTotalBill] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data to be sent
        const eventData = {
            eventName,
            participants: participants.map(name => ({ name, share: totalBill / participants.length })),
            totalBill: parseFloat(totalBill)
        };

        try {
            // Send a POST request to the backend
            await axios.post('https://billsplitterbackend.onrender.com/events', eventData);

            // Show a success message
            setSuccessMessage('Event added successfully!');
            setErrorMessage('');

            // Clear form fields after submission
            setEventName('');
            setParticipants(['']);
            setTotalBill('');
        } catch (error) {
            // Show an error message if the request fails
            setErrorMessage('Failed to add event. Please try again.');
            setSuccessMessage('');
        }
    };

    // Handle participant change
    const handleParticipantChange = (index, value) => {
        const newParticipants = [...participants];
        newParticipants[index] = value;
        setParticipants(newParticipants);
    };

    // Add new participant field
    const addParticipant = () => {
        setParticipants([...participants, '']);
    };

    // Remove participant field
    const removeParticipant = (index) => {
        const newParticipants = participants.filter((_, i) => i !== index);
        setParticipants(newParticipants);
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Add New Event</h2>
            <form onSubmit={handleSubmit} className="event-form">
                {/* Event Name */}
                <div className="form-group">
                    <label htmlFor="eventName">Event Name:</label>
                    <input
                        type="text"
                        id="eventName"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        placeholder="Enter event name"
                        required
                    />
                </div>

                {/* Participants */}
                <div className="form-group">
                    <label>Participants:</label>
                    {participants.map((participant, index) => (
                        <div key={index} className="participant-input">
                            <input
                                type="text"
                                className="participant-field"
                                value={participant}
                                onChange={(e) => handleParticipantChange(index, e.target.value)}
                                placeholder={`Participant ${index + 1}`}
                                required
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    className="remove-button"
                                    onClick={() => removeParticipant(index)}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        className="add-button"
                        onClick={addParticipant}
                    >
                        Add Participant
                    </button>
                </div>

                {/* Total Bill */}
                <div className="form-group">
                    <label htmlFor="totalBill">Total Bill:</label>
                    <input
                        type="number"
                        id="totalBill"
                        value={totalBill}
                        onChange={(e) => setTotalBill(e.target.value)}
                        placeholder="Enter total bill"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-button">Add Event</button>

                {/* Success or Error Message */}
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default EventForm;
