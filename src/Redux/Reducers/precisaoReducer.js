import { RITMOFATAL } from '../Actions/types';

const INITIALSTATE = {
    Runa1: ''
};

export const ritmofatal = (state = INITIALSTATE, action) => {
    switch (action.type){
        case RITMOFATAL:
            return {
                ...state,
                Runa1:  'ritmo fatal',
            };
        default:
            return state;
    }   
}
