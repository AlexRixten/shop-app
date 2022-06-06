import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';


const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach(el => sum += Number.parseFloat(el.price))
  return (
    <>
      {props.orders.map(item => (
        <Order key={item.id} item={item} onDelete={props.onDelete} />
      ))}
      <p className='sum'>Сумма: {new Intl.NumberFormat().format(sum)}$</p>
    </>
  )
}

const showNothing = () => {
  return(
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
  )
}

export default function Header(props) {

  const [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen && 'active'}`}
        />

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
              showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
