import React, { useState } from 'react';
import './ExpenseForm.css'; // Import the CSS file

const ExpenseForm1 = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [paidBy, setPaidBy] = useState('');
    const [forWhom, setForWhom] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Expense Description:', description);
        console.log('Amount:', amount);
        console.log('Paid By:', paidBy);
        console.log('For Whom:', forWhom);
        // Clear form fields after submission
        setDescription('');
        setAmount('');
        setPaidBy('');
        setForWhom('');
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Add New Expense</h2>
            <form onSubmit={handleSubmit} className="expense-form">
                {/* Expense Description */}
                <div className="form-group">
                    <label htmlFor="description">Expense Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description"
                        required
                    />
                </div>

                {/* Amount */}
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        required
                    />
                </div>

                {/* Paid By */}
                <div className="form-group">
                    <label htmlFor="paidBy">Paid By:</label>
                    <input
                        type="text"
                        id="paidBy"
                        value={paidBy}
                        onChange={(e) => setPaidBy(e.target.value)}
                        placeholder="Enter payer's name"
                        required
                    />
                </div>

                {/* For Whom */}
                <div className="form-group">
                    <label htmlFor="forWhom">For Whom:</label>
                    <input
                        type="text"
                        id="forWhom"
                        value={forWhom}
                        onChange={(e) => setForWhom(e.target.value)}
                        placeholder="Enter participants "
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-button">Add Expense</button>
            </form>
        </div>
    );
};

export default ExpenseForm1;
