import React from 'react';
import PropTypes from "prop-types";


const ShopCard = (props) => {
    return (
        <div className='shop-card' style={{backgroundImage: `url(${props.img})`}}>

            <div className='card__title'>
                <div className='card__name'>{props.name.toUpperCase()}</div>
                <div className='card__color'>{props.color}</div>
            </div>

            <div className="card__footer">
                <div className='card__price'>${props.price}</div>
                <div className='card__cart-button'>ADD TO CART</div>
            </div>

        </div>
    );
};
ShopCard.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string,
}
export default ShopCard;