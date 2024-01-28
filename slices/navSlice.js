import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    msg: 'Hello',
    location: 'Paris',
    mood: 'adventurous',
    season: 'fall',
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setMsg: (state = initialState, action) => {
            state.msg = action.payload
        },
        setLocation: (state = initialState, action) => {
            state.location = action.payload
        },
        setMood: (state = initialState, action) => {
            state.mood = action.payload
        },
        setSeason: (state = initialState, action) => {
            state.season = action.payload
        },
    }
})

export const { setMsg, setLocation, setMood, setSeason } = navSlice.actions

export const selectMsg = (state = initialState) => state.nav.msg
export const selectLocation = (state = initialState) => state.nav.location
export const selectMood = (state = initialState) => state.nav.mood
export const selectSeason = (state = initialState) => state.nav.season

export default navSlice.reducer