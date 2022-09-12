import {createSlice} from "@reduxjs/toolkit";
import {switchActivePlayer} from "../utils";
import {InitialState} from "../types";

const initialState: InitialState = {
    winner: null,
    targetScore: 100,
    activePlayer: "Player 1",
    dice: [],
    entities: {
        "Player 1": {
            id: "Player 1",
            currentScore: 0,
            totalScore: 0
        },
        "Player 2": {
            id: "Player 2",
            currentScore: 0,
            totalScore: 0
        }
    },
    ids: ["Player 1", "Player 2"]
}

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setTargetScore: (state, action) => {
            if (action.payload > 0) {
                state.targetScore = action.payload;
            }
            if (action.payload === 0 || action.payload === "") {
                state.targetScore = "";
            }
        },
        setDice: (state, action) => {
                state.dice = action.payload;
                const diceSum = state.dice[0] + state.dice[1];
                if (diceSum / state.dice[0] === 2) {
                    state.entities[state.activePlayer].currentScore = 0;
                    state.dice = [];
                    switchActivePlayer(state);
                } else {
                    state.entities[state.activePlayer].currentScore += diceSum;
                }
        },
        holdResult: (state) => {
            state.entities[state.activePlayer].totalScore += state.entities[state.activePlayer].currentScore;
            state.entities[state.activePlayer].currentScore = 0;
            if (state.entities[state.activePlayer].totalScore >= state.targetScore) {
                state.winner = state.activePlayer;
            } else {
                state.dice = [];
                switchActivePlayer(state);
            }
        },
        resetGame: () => {
            return initialState;
        }
    }
});

export const { setTargetScore, setDice, holdResult, resetGame } = mainSlice.actions;
export default mainSlice.reducer;
