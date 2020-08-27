import React, { useState } from 'react';
import FakeData from '../FakeData/courseDitails';
import Item from '../Item/Item';
import Cart from '../Cart/Cart';
const Courses = () => {
    const RandomData = FakeData;
    const [courses , setCourse] = useState(RandomData);
    const [cart , setCart] =useState([]);
    
    const hendleAdd = (item) => {
        const newCart = [...cart ,item];
        setCart(newCart);
        }
        const totalPrice = cart.reduce((total,current) => total + current.price,0);
    return (
        <div className="container-fluid">
            <h2 className ="text-center py-4 logo">All Courses</h2>
           <div className="row">
               <div className ="col-md-9 row border-right">
               {
                courses.map(course => <Item course={course} hendleAdd={hendleAdd} />)
               }
               </div>
               <div>
               <div className="ml-5">
                 <h2>Order summery : {cart.length}</h2>
                 <ul className="list-group">
                    {
                    cart.map(cart=> <Cart cart={cart} /> )
                    }
               </ul>
                 <button type="button" className="btn btn-primary">TotalPrice :<span className="badge badge-light">${totalPrice}</span>
                </button>
                </div>
               </div>
              
           </div>
        </div>
    );
};

export default Courses;