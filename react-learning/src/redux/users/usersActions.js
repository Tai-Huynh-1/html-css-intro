import { DELETE_USER, SET_USER } from "./usersType";

export const setUser = (payload) => ({type: SET_USER, payload})

export const deleteUser = (id) => ({type: DELETE_USER, payload: id})