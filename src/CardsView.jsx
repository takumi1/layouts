import React from 'react';
import ShopCard from "./ShopCard";

const CardsView = (props) => {
    return (
        <div className='cards__wrapper'>
            {props.cards.map((el, index) =>
                <ShopCard
                    key={index}
                    name={el.name}
                    price={el.price}
                    color={el.color}
                    img={el.img}/>
            )}
        </div>
    );
};

export default CardsView;