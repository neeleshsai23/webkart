import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INC_QUANTITY,
  DEC_QUANTITY,
} from '../actions/actionTypes';

import s10 from '../../images/mobiles/s10.jpg';
import i11 from '../../images/mobiles/iphone11.png';
import r5pro from '../../images/mobiles/realme5pro.jpg';
import r8a from '../../images/mobiles/redmi8a.jpg';
import r9pro from '../../images/mobiles/redminote9pro.jpg';
import of11 from '../../images/mobiles/oppof11.jpg';
import oa12 from '../../images/mobiles/oppoa12.jpg';

const mobileState = {
  details: [
    {
      name: 'Samsung Galaxy S10 (Black, 128GB)',
      price: '55,999',
      image: s10,
      id: 'M1',
      quantity: 1,
    },
    {
      name: 'Iphone 11 (Black, 128GB)',
      price: '75,000',
      image: i11,
      id: 'M2',
      quantity: 1,
    },
    {
      name: 'Realme Note5 Pro (Blue, 64GB)',
      price: '45,999',
      image: r5pro,
      id: 'M3',
      quantity: 1,
    },
    {
      name: 'Redmi Note8 A (Blue, 64GB)',
      price: '62,000',
      image: r8a,
      id: 'M4',
      quantity: 1,
    },
    {
      name: 'Redmi Note9 Pro (Blue, 128GB)',
      price: '40,000',
      image: r9pro,
      id: 'M5',
      quantity: 1,
    },
    {
      name: 'Oppo F11 (Blue, 64GB)',
      price: '42,000',
      image: of11,
      id: 'M6',
      quantity: 1,
    },
    {
      name: 'Oppo A12 (Blue, 64GB)',
      price: '46,000',
      image: oa12,
      id: 'M7',
      quantity: 1,
    },
  ],
  cart: [],
  id: [],
  totalItems: 0,
};

const mobileReducer = (state = mobileState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.id.includes(action.id)) {
        return state;
      } else {
        state.totalItems += 1;
        return {
          ...state,
          cart: [
            ...state.cart,
            state.details.find((item) => item.id === action.id),
          ],
          id: [...state.id, action.id],
        };
      }
    case REMOVE_FROM_CART:
      let y = state.details.find((item) => item.id === action.id);
      state.totalItems -= y.quantity;
      y.quantity = 1;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
        id: state.id.filter((item) => item !== action.id),
      };
    case INC_QUANTITY:
      let x = state.details.find((item) => item.id === action.id);
      x.quantity += 1;
      state.totalItems += 1;
      return {
        ...state,
      };
    case DEC_QUANTITY:
      let z = state.details.find((item) => item.id === action.id);
      z.quantity -= 1;
      state.totalItems -= 1;
      if (z.quantity === 0) {
        let a = state.details.find((item) => item.id === action.id);
        a.quantity += 1;
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.id),
          id: state.id.filter((item) => item !== action.id),
        };
      }
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default mobileReducer;
