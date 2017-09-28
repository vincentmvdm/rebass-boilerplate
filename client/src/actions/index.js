import axios from 'axios';
import { FETCH_HELLO } from './types';

export const fetchHello = () => async dispatch => {
    const res = await axios.get('/api/hello');
    dispatch({ type: FETCH_HELLO, payload: res.data });
};
