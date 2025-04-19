import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offers from '../components/offers/Offers';
import NewCollections from '../components/NewCollections/NewCollections';
import Newsletter from '../components/NewsLetter/NewsLetter';
import ChatBotButton from '../components/ChatBotButton/ChatBotButton';



const Shops = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <Newsletter/>
            <ChatBotButton/>
            
        </div>
    );
}

export default Shops;
