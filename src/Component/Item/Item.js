import React from 'react';
import './Item.css'

const Item = (props) => {

    return (
        <div className = "item">
            <h1>{props.course.name}</h1>
            <p>Price: {props.course.price} $</p>
            <button onClick = {() => props.handleAddCourses(props.course)} className = "btn">Enrol Now</button>
        </div>
    );
};

export default Item;