import React from 'react';
import './Location.css'

const location = (props) => {
    return (
        <div 
            className="Location" 
            onClick={props.clicked}
            style={props.selected ? {backgroundColor: '#C0DDF5'} : null }
        >
            <h4 >{props.name}</h4>
        </div>
    );
};

export default location;