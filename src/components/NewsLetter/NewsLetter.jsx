import React, { useState } from "react";
import "./NewsLetter.css";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (email) {
            alert(`Subscribed successfully with: ${email}`);
            setEmail("");
        } else {
            alert("Please enter a valid email address.");
        }
    };

    return (
        <div className="newsletter">
            <div className="newsletter-content">
                <h2 className="newsletter-title">Get Exclusive Offers!</h2>
                <p className="newsletter-text">
                    Subscribe to our newsletter and stay updated with the latest deals and discounts.
                </p>
                <div className="newsletter-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="newsletter-input"
                    />
                    <button onClick={handleSubscribe} className="newsletter-btn">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
