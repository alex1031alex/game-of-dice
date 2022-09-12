import {InitialState} from "./types";

export const getRandomNumber = () => {
    return Math.floor(1 + Math.random() * 6);
};

export const switchActivePlayer = (state: InitialState) => {
    if (state.activePlayer === state.ids[0]) {
        state.activePlayer = state.ids[1];
    } else {
        state.activePlayer = state.ids[0];
    }
};