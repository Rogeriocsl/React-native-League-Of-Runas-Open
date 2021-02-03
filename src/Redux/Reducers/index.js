import { combineReducers } from 'redux';
import { ritmofatal } from './precisaoReducer';


// Combine all the reducers
const rootReducer = combineReducers({
    ritmofatal
   
    
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;
