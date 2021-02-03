import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../Reducers/index'; //Import the reducer

export default createStore(reducers, applyMiddleware(thunk));
