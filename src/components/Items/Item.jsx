import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ( props ) => {
    return (
        <div className="item-container">
            <Link to ={`/product/${props.id}`}> <img className="item-image" src={props.image} alt="" /> </Link>

            <p className="item-name">{props.name}</p>
            <div className="item-prices">
                <span className="item-price-new">${props.price}</span>
            </div>
            <button className="buy-now-btn">Buy Now</button>
        </div>
    );
}

export default Item;
