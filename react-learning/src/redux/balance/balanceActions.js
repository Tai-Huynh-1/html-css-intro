// This is my action creator functions

import { DEPOSIT, WITHDRAW } from "./balanceTypes";

export function deposit() {
    // returns action object, payload is optional
    return {
        type: DEPOSIT,
        payload: 10
    }
}

// function withdraw() {
//     return {
//         type: WITHDRAW,
//         payload: 10
//     }
// }

export const withdraw = () => ({type: WITHDRAW, payload: 10})