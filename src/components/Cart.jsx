import React, { useEffect, useState } from 'react';
import '../css/cart.css';

export default function Cart(props) {
    const {data} = props;
    const [cart,setCart] = useState([]);
    useEffect(() => {
        setCart(data)
    },[props]);
    return (
        <>
            <div className='cart-container'>
                <div className='cart-detail'>
                    <div className='cart-title'>Your cart</div>
                    <div className='cart-list'>
                        
                    </div>
                    <div className='total-cart'>
                        djajdajd
                    </div>
                </div>
            </div>
        </>
    )
}
