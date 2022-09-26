import React from 'react';
import "./Shopitem.css"

const Shopitem = ({handler,product}) => {

    const { name, img, price, id, ratings, seller, } = product;
    // console.log(props.product)

    //style
    const pricestyle = {
        marginBottom:'20px',
        marginTop:'2px'
    }
    return (
        <div className='shopitem'>
            <div className='imgborder'>
                <img src={product.img} alt="" />
            </div>
            <div className="info">
                <h3>{name}</h3>
                <h5 style={pricestyle}>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating : {ratings}</p>
            </div>
            <button className='addtocart' onClick={()=>{handler(product.id)}}>Add to Cart <i class="fa-solid fa-cart-plus"></i></button>
        </div>
    );
};

export default Shopitem;