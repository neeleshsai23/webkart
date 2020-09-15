import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INC_QUANTITY,
  DEC_QUANTITY,
} from '../actions/actionTypes';

import s10 from '../../images/mobiles/s10.jpg';
import i11 from '../../images/mobiles/iphone11.png';

const laptopState = {
  details: [
    {
      name: 'Laptop 1',
      price: '55,999',
      image: s10,
      id: 'L1',
      quantity: 1,
    },
    {
      name: 'Laptop 2',
      price: '75,000',
      image: i11,
      id: 'L2',
      quantity: 1,
    },
  ],
  cart: [],
  id: [],
  totalItems: 0,
};

const laptopReducer = (state = laptopState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default laptopReducer;
