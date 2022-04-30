import React from 'react';
import PropTypes from "prop-types";

const IconSwitch = (props) => {
    return (
        <div className='icon-switch'>
            <span className="material-icons" onClick={() => props.onSwitch()}>{props.icon}</span>
        </div>
    );
};
IconSwitch.propTypes = {
    icon: PropTypes.string
}
export default IconSwitch;