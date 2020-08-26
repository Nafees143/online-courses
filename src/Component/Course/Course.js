import React from 'react';
import fakeData from '../../fakeData/courseData';
import { useState } from 'react';
import './Course.css';
import Item from '../Item/Item';
import Cart from '../Cart/Cart';

const Course = () => {
    const [courses,setCourse] = useState(fakeData);
    const [cart, setCart] = useState ([]);

    const handleAddCourses = (course) => {

        const newCart = [...cart, course];
        setCart(newCart)
    }

    return (
        <div className="course-cart">
            <div className = "course-container">
            {
                courses.map(course => <Item 
                    handleAddCourses = {handleAddCourses}
                    course = {course}
                ></Item>)
            }
            </div>
            <div className = "cart-container">
                <Cart cart = {cart}></Cart>
            </div>
            
        </div>
    );
};

export default Course;