import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Descriptionbox from '../components/Descriptionbox/Descriptionbox';

const Product = () => {
    const { allProducts } = useContext(ShopContext); // ✅ Fix variable name
    const { productId } = useParams();
    
    const product = allProducts.find((e) => e.id === Number(productId)); // ✅ Ensure productId is a number

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product}/>
            <Descriptionbox/>
        </div>
    );
};

export default Product;
