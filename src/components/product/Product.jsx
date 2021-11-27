import React from 'react';
import './product.css';

const Product = ({img,link}) => {
    return (
        <div className="product">
            <div className="product-browser">
                <div className="product-circle"></div>
                <div className="product-circle"></div>
                <div className="product-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={Object.values(img)} alt="" className="product-img" />
            </a>
        </div>
    )
}

export default Product
