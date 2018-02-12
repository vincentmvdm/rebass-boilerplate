import { push } from "react-router-redux";

export const signIn = values => {
    return dispatch => {
        console.log(values);
        dispatch(push("/dashboard"));
    };
};
