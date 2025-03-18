import React from 'react';
import './Offers.css';
import pngwing from '../assets/pngwing.png';

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-content">
                <h1 className="offers-title">Exclusive</h1>
                <h1 className="offers-title highlight">Offers for You</h1>
                <p className="offers-subtitle">ONLY BEST SELLERS</p>
                <button className="offers-btn">Check Now</button>
            </div>
            <div className="offers-image">
                <img src={pngwing} alt="Exclusive Offer" />
            </div>
        </div>
    );
}

export default Offers;
