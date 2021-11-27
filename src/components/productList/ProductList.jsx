import React from 'react';
import './productlist.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
    return (
        <div className="productlist">
            <div className="productlist-texts">
            <h1 className="productlist-title">Create & inspire. It's Anmol</h1>
                <p className="productlist-desc">
                    This is a creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <div className="productlist-lists">
                {products.map((item)=>(
                        <Product key={item.id} img={item.img} link={item.link}/>
                        
                ))}
               
            </div>
            
        </div>
    )
}

export default ProductList
