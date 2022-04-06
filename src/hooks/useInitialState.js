import React, {useState} from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) =>{
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = (payload, indexValue) => {
        setState({
          ...state,
          cart: state.cart.filter((items,index) => items.id !== payload.id && index != indexValue),
        });
      };
      const addToBuyer = (payload)=>{
        setState({
          ...state,
          buyer: [...state.buyer, payload]
        });
      }

      const addNewOrder = (payload)=>[
        setState({
          ...state,
          orders: [...state.orders, payload]
        })
      ]

  return (
    {addToCart, removeFromCart, state, addToBuyer, addNewOrder}
    );

}

export default useInitialState;