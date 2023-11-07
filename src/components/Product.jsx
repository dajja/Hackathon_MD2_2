import React, { useEffect, useState } from 'react';
import '../css/products.css';

export default function Product(props) {
    const [cart,setCart] = useState([]);
    const { data, list, increase, decrease } = props;
    const removeFromCart = (id) => {
        const newArr = [...list];
        let index = newArr.findIndex((e) => e.id == id);
        newArr[index].count -= 1;
        decrease(newArr);
        setCart([...cart,newArr[index]]);
    }
    const addToCart = (id) => {
        const newArr = [...list];
        let index = newArr.findIndex((e) => e.id == id);
        newArr[index].count += 1;
        increase(newArr);
        let exist = cart.findIndex(e => e.id == newArr[index].id);
        if (exist != -1) {
            
        } else {
            setCart([...cart,newArr[index]]);
        }
    }
    useEffect(() => {
        console.log(cart);
    },[cart])
    return (
        <div className='product-item'>
            <div className='product-img'>
                <img src={data.image} alt="" />
            </div>
            <div className='product-detail'>
                <div className='product-detail-1'>
                    <div>{data.title}</div>
                    <div>${data.price}</div>
                </div>
                <div className='product-detail-2'>
                    <button className='btn-rest' disabled={data.count == 0} onClick={() => removeFromCart(data.id)}>Interest</button>
                    <div className='quantity'>{data.count}</div>
                    <button className='btn-add' onClick={() => addToCart(data.id)}>Add</button>
                </div>
            </div>
        </div>
    )
}
