import React from 'react';

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

export default ShopCard;