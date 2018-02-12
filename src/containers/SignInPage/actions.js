import { push } from "react-router-redux";

export const signIn = values => {
    return (dispatch, getState) => {
        console.log(values);
        dispatch(push("/dashboard"));
    };
};
