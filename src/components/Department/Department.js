import React from 'react';
import './Department.css'

const department = (props) => {
    return (
        <div 
            className="Department" 
            onClick={props.clicked}
            style={props.selected ? {backgroundColor: '#C0DDF5'} : null }
        >
            <h4 >{props.name}</h4>
        </div>
    );
};

export default department;