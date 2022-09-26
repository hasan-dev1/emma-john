import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Shopitem from '../Shopitem/Shopitem';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const addToCart =(props)=>{
        const carobj = {id: props}
        const cartId = [...cart, carobj];
        setCart(cartId)
        console.log(cart)
    }
    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Shopitem 
                        
                        product={product}
                        key={product.id}
                        handler={addToCart}

                        ></Shopitem>)
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
