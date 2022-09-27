import { DELETE_USER, SET_USER } from "./usersType";

const initialUsersList = []

const usersReducer = (usersList = initialUsersList, action) => {
    switch (action.type) {
        case SET_USER:
            return action.payload
        case DELETE_USER:
            return usersList.filter((user) => user.id !== action.payload)    
        default:
            return usersList
    }
}

export default usersReducer