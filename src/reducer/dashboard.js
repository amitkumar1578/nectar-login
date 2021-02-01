import {
    GET_USERS,
} from "../action/types";

const users = [{
    "id": 1,
    "name": "test1",
    "age": 11,
    "gender": "Male",
    "email": "test1@gmail.com",
    "phoneNo": 911111111,
}, {
    "id": 2,
    "name": "test2",
    "age": 12,
    "gender": "Male",
    "email": "test2@gmail.com",
    "phoneNo": 9222222222,
}, {
    "id": 3,
    "name": "test3",
    "age": 13,
    "gender": "Male",
    "email": "test3@gmail.com",
    "phoneNo": 9333333333,
}, {
    "id": 4,
    "name": "test4",
    "age": 14,
    "gender": "Male",
    "email": "test4@gmail.com",
    "phoneNo": 9444444444,
}, {
    "id": 5,
    "name": "test5",
    "age": 15,
    "gender": "Male",
    "email": "test5@gmail.com",
    "phoneNo": 9555555555,
}, {
    "id": 6,
    "name": "test6",
    "age": 16,
    "gender": "Male",
    "email": "test6@gmail.com",
    "phoneNo": 9666666666,
}];
export default (state = users, { type }) => {
    switch (type) {
        case GET_USERS:
            return {
                ...state,
            };

        default:
            return state;
    }
};