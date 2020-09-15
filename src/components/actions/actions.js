import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INC_QUANTITY,
  DEC_QUANTITY,
} from './actionTypes';

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    name: item.name,
    price: item.price,
    image: item.image,
    id: item.id,
    quantity: item.quantity,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: INC_QUANTITY,
    id,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: DEC_QUANTITY,
    id,
  };
};
