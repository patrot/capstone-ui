import React from 'react';
import './Product.css'

const product = (props) => {
    return (
        <div 
            className="Product" 
            onClick={props.clicked}
            style={props.selected ? {backgroundColor: '#C0DDF5'} : null }
        >
            <h4 >{props.name}</h4>
        </div>
    );
};

export default product;