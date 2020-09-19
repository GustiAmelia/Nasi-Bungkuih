import {createStore,applyMiddleware} from 'redux';
import rpm from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';

import indexReducer from '../redux/reducers/index';

const logger = createLogger();
const enhancers = applyMiddleware(rpm,logger);
const store = createStore(indexReducer,enhancers);

export default store;
