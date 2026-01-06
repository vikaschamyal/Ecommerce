import React, { useState } from 'react';
import { FiZap, FiPlus, FiMinus } from 'react-icons/fi';
import './Wallet.css';

const Wallet = () => {
    const [balance] = useState(500); // Mock balance, in real app fetch from API

    const transactions = [
        { id: 1, type: 'credit', amount: 500, description: 'Welcome Bonus', date: '2024-01-15' },
        { id: 2, type: 'debit', amount: 120, description: 'Purchase #1234', date: '2024-01-10' },
    ];

    return (
        <div className="wallet-page">
            <div className="wallet-container">
                <h1 className="wallet-title">My Wallet</h1>
                
                {/* Balance Card */}
                <div className="wallet-balance-card">
                    <div className="balance-header">
                        <div className="balance-icon">
                            <FiZap />
                        </div>
                        <div>
                            <p className="balance-label">Available Balance</p>
                            <h2 className="balance-amount">₹{balance.toLocaleString()}</h2>
                        </div>
                    </div>
                    <div className="balance-actions">
                        <button className="action-btn add-money">
                            <FiPlus /> Add Money
                        </button>
                    </div>
                </div>

                {/* Transactions */}
                <div className="transactions-section">
                    <h3>Recent Transactions</h3>
                    <div className="transactions-list">
                        {transactions.map(transaction => (
                            <div key={transaction.id} className="transaction-item">
                                <div className="transaction-icon">
                                    {transaction.type === 'credit' ? <FiPlus /> : <FiMinus />}
                                </div>
                                <div className="transaction-details">
                                    <p className="transaction-desc">{transaction.description}</p>
                                    <p className="transaction-date">{transaction.date}</p>
                                </div>
                                <span className={`transaction-amount ${transaction.type}`}>
                                    {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;

