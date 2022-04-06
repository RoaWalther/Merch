import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const {state, removeFromCart} = useContext(AppContext);
  const {cart} = state;

  const handleRemove = (product,index)=> ()=> {
    removeFromCart(product,index);
  }

  const handleSuma= ()=>{
    let sum = 0;
    cart.map(item =>{
      sum += item.price;
    })
    return sum
    
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length >0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos</h3>}
        {cart.map((item,index)=> (
          <div className="Checkout-item" key={`${index}-${item.id}`}>
            <div className="Checkout-element"  key={`${index}-${item.id}`}>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type='button' onClick={handleRemove(item, index)}>
              <i className=' fas fa-trash-alt'></i>
            </button>
          </div>
        ))}
        
      </div>
      {cart.length > 0 && 
      ( <div className="Checkout-sidebar">
          <h3>Precio total: ${handleSuma()}</h3>
          <Link to="/checkout/information">
          <button type='button'>Continuar pedido</button>
          </Link>
        </div>)}
      
    </div>
  )
}

export default Checkout;