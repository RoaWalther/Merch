import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button';
import { useNavigate } from 'react-router-dom';
import '../styles/Payment.css';

const Payment = () => {
  const {state, addNewOrder} = useContext(AppContext);
  const {cart, buyer}= state;
  const navigate = useNavigate();

  const paypalOptions = {
    clientId: 'AebfLFKnFVPV8zafzrfmmBysVnxzhc8KViqXsNlQ22bkOa_0expW67p8lA79H-vt82ZfxCWop7hLNvzs',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles ={
      layout: 'vertical',
      shape: 'rect',
  }

  const handlePaymentSuccess = (data)=>{
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  }

  const handleSuma= ()=>{
    let sum = 0;
    cart.map(item =>{
      sum += item.price;
    })
    return sum
    
  }
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item)=> (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                  <h4>{item.title}</h4>
                  <span>$ {item.price}</span>
              </div>
            </div>
        ))}
        
      <div className='Paypal-button'>
        <PayPalButton 
        paypalOptions={paypalOptions}
        buttonStyles={buttonStyles}
        amount={handleSuma()}
        onPaymentStart={()=> console.log('Start Payment')}
        onPaymentSuccess={data => handlePaymentSuccess(data)}
        onPaymentError={error => console.log(error)}
        onPaymentCancel={data => console.log(data)}
        />
      </div>
      </div>
    </div>
  )
}

export default Payment;