import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INC_QUANTITY,
  DEC_QUANTITY,
} from '../actions/actionTypes';

const cartState = {
  cartItems: [],
  totalItems: 0,
  id: [],
};

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.id.includes(action.id)) {
        return state;
      } else {
        state.totalItems += 1;
        return {
          ...state,
          cartItems: [...state.cartItems, action],
          id: [...state.id, action.id],
        };
      }
    case REMOVE_FROM_CART:
      let y = state.cartItems.find((item) => item.id === action.id);
      state.totalItems -= y.quantity;
      y.quantity = 1;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.id),
        id: state.id.filter((item) => item !== action.id),
      };
    case INC_QUANTITY:
      let x = state.cartItems.find((item) => item.id === action.id);
      x.quantity += 1;
      state.totalItems += 1;
      return {
        ...state,
      };
    case DEC_QUANTITY:
      let z = state.cartItems.find((item) => item.id === action.id);
      z.quantity -= 1;
      state.totalItems -= 1;
      if (z.quantity === 0) {
        let a = state.cartItems.find((item) => item.id === action.id);
        a.quantity += 1;
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.id),
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

export default cartReducer;
