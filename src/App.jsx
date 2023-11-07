import React, { useState } from 'react'
import Cart from './components/Cart';
import Products from './components/Products';
export default function App() {
  const [inCart,setInCart] = useState([]);
  return (
    <div>
      <Products cart={inCart}/>
      <Cart data={inCart}/>
    </div>
  )
}
