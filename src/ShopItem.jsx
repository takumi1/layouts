import React from 'react';
import PropTypes from "prop-types";


const ShopItem = (props) => {
    return (
        <div className='shop-item'>
            <img src={props.img} alt=""/>
            <div className='item__name'>{props.name.toUpperCase()}</div>
            <div className='item__color'>{props.color}</div>
            <div className='item__price'>${props.price}</div>
            <div className='item__cart-button'>ADD TO CART</div>
        </div>
    );
};
ShopItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string,
}
export default ShopItem;