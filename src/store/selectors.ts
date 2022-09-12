import {RootState} from "./store";
import {Id} from "../types";

export const selectWinner = (state: RootState) => state.winner;
export const selectActivePlayer = (state: RootState) => state.activePlayer;
export const selectTargetScore = (state: RootState) => state.targetScore;
export const selectDice = (state: RootState) => state.dice;
export const selectPlayerById = (id: Id) => {
    return (state: RootState) => state.entities[id];
};