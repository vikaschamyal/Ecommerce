import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { MdAccountCircle, MdLogout } from 'react-icons/md';
import './Account.css';

const Account = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (!user) {
        return (
            <div className="account-page">
                <div className="account-container">
                    <h1>Please login to view your account</h1>
                    <button onClick={() => navigate('/login')} className="login-btn">
                        Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="account-page">
            <div className="account-container">
                <div className="account-header">
                    <div className="account-avatar">
                        <MdAccountCircle />
                    </div>
                    <div>
                        <h1>{user.name || 'User'}</h1>
                        <p>{user.email}</p>
                    </div>
                </div>

                <div className="account-sections">
                    <div className="account-section">
                        <h3>Account Details</h3>
                        <div className="info-row">
                            <span>Name:</span>
                            <span>{user.name || 'Not set'}</span>
                        </div>
                        <div className="info-row">
                            <span>Email:</span>
                            <span>{user.email}</span>
                        </div>
                    </div>

                    <button className="logout-button" onClick={handleLogout}>
                        <MdLogout />
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Account;

