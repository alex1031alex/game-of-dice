import {AnyAction} from "redux";
import {ActionType} from "./actions";

export const GameStatus = {
    NOT_STARTED: "not_started",
    PLAYING: "playing",
    PLAYER_1_WON: "player_1_won",
    PLAYER_2_WON: "player_2_won"
}

const initialState = {
    gameStatus: GameStatus.NOT_STARTED,
    targetScore: 0,
    activePlayer: null,
}

export const reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ActionType.SET_GAME_STATUS: {
            return {
                ...state,
                gameStatus: action.payload
            };
        }

        case ActionType.SET_TARGET_SCORE: {
            return {
                ...state,
                targetScore: action.payload
            };
        }

        case ActionType.SET_ACTIVE_PLAYER: {
            return {
                ...state,
                activePlayer: action.payload
            }
        }

        default: return state;
    }
};