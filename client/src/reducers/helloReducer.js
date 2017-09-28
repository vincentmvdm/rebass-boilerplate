import { FETCH_HELLO } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_HELLO:
            return action.payload || false;
        default:
            return state;
    }
}
