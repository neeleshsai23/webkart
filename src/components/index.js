import { combineReducers } from 'redux';

import mobileReducer from './reducers/mobileReducer';

const allReducers = combineReducers({
  mobiles: mobileReducer,
});

export default allReducers;
