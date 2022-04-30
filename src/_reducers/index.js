import {combineReducers} from 'redux';
import ProductReducer from './product.reducer';
import CartReducer from "./cart.reducer"

const rootReducer = combineReducers({
    ProductReducer, CartReducer
});

export default rootReducer;
