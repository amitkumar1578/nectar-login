import {
    GET_LOG,
} from "../action/types";

const initialState = {
    "username": "nectar123@gmail.com",
    "password": "nectar123"
};
export default (state = initialState, { type }) => {
    switch (type) {
        case GET_LOG:
            return {
                ...state,
            };

        default:
            return state;
    }
};
