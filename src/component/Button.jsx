/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';
import "./Button.css"
function Button({ number, displayValue }) {
    // Ensure that 'number' is an array


    return (
        <>
            <div className="button">{number.map((item) => (
                <button className="key" onClick={(e)=>displayValue(e)} key={item}>{item}</button>
            ))}</div>
            
        </>
    );
}

// Define PropTypes for the Button component
Button.propTypes = {
    number: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Button;
