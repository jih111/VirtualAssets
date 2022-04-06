import { combineReducers } from 'redux';
import market from './market';
import modal from './modal';

const rootReducer = combineReducers({
  market,
  modal,
});

export default rootReducer;
