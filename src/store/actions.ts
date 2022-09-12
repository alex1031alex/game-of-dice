import { setDice } from "./reducer";
import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { getRandomNumber } from "../utils";
import {AppDispatch, AppGetState} from "./store";


export const rollDiceThunk = () => (dispatch: AppDispatch) => {
    const payload = new Array(2).fill(getRandomNumber());
    return dispatch(setDice(payload));
};
