import { combineReducers } from 'redux';

import mobileReducer from './reducers/mobileReducer';
import laptopReducer from './reducers/laptopReducer';
import cartReducer from './reducers/cartReducer';

const allReducers = combineReducers({
  mobiles: mobileReducer,
  laptops: laptopReducer,
  cart: cartReducer,
});

export default allReducers;
