import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IInitialState} from "../types";

const initialState: IInitialState = {
    theme: localStorage.theme ?? 'light'
}

export const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.theme = action.payload;
            localStorage.theme = action.payload;
        },
    },
})


export const { setTheme } = slice.actions

export default slice.reducer