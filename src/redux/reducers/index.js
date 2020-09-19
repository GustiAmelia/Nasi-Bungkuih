import { combineReducers } from 'redux';
import authReducers from './auth';
import menuReducers from './menu';
import categoryReducers from './category';

const indexReducer = combineReducers({
    auth : authReducers,
    menu : menuReducers,
    category : categoryReducers,

});

export default indexReducer;
