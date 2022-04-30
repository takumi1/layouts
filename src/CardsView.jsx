import React from 'react';
import ShopCard from "./ShopCard";
import PropTypes from "prop-types";

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
CardsView.propTypes = {
    cards: PropTypes.array
}
export default CardsView;