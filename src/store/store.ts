import {configureStore, PayloadAction} from "@reduxjs/toolkit";
import reducer from "./reducer";


export const store = configureStore({
    reducer: reducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch<PayloadAction>;
export type AppGetState = typeof store.getState;