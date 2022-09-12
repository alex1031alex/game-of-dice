import {createSlice} from "@reduxjs/toolkit";

export enum GameStatus {
    PLAYING = "playing",
    PLAYER_1_WON = "player_1_won",
    PLAYER_2_WON = "player_2_won"
}

type Id = "Player 1" | "Player 2";

interface Player {
    id: Id;
    currentScore: number;
    totalScore: number;
}

interface InitialState {
    gameStatus: GameStatus;
    targetScore: number | "";
    activePlayer: Id;
    dice: number[]
    entities: {[key: string]: Player},
    ids: string[]
}

const initialState: InitialState = {
    gameStatus: GameStatus.PLAYING,
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
                if (state.dice[0] === 6 && state.dice[1] === 6) {
                    return state;
                }
                state.entities[state.activePlayer].currentScore = state.dice[0] + state.dice[1];
        }
    }
});

export const { setTargetScore, setDice } = mainSlice.actions;
export default mainSlice.reducer;

