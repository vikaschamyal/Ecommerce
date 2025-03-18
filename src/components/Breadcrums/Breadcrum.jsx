import React from 'react';
import '../Breadcrums/Breadcrum.css'
import { IoIosArrowForward } from "react-icons/io";



const Breadcrum = (props) => {
    const {product} = props
    return (
        <div>
            HOME<IoIosArrowForward /> SHOP<IoIosArrowForward />{product.category}<IoIosArrowForward />{product.name }
        </div>
    );
}

export default Breadcrum;
