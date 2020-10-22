import { combineReducers } from 'redux';
import authReducers from './auth';
import menuReducers from './menu';
import categoryReducers from './category';
import searchMenuReducers from './searchMenu';

const indexReducer = combineReducers({
    auth : authReducers,
    menu : menuReducers,
    category : categoryReducers,
    serch:searchMenuReducers,

});

export default indexReducer;
