import React from 'react';
import ShopItem from "./ShopItem";
import PropTypes from "prop-types";

const ListView = (props) => {
    return (
        <div className='list_wrapper'>
            {props.items.map((el, index) =>
                <ShopItem key={index}
                          name={el.name}
                          price={el.price}
                          color={el.color}
                          img={el.img}/>
            )}
        </div>
    );
};
ListView.propTypes = {
    items: PropTypes.array
}
export default ListView;