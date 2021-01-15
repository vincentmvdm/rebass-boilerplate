import { push } from 'connected-react-router';

export const signIn = values => {
    return dispatch => {
        console.log(values);
        dispatch(push("/dashboard"));
    };
};
