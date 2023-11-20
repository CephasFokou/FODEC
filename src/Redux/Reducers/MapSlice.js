import { createSlice } from '@reduxjs/toolkit';


// Map Slice
const mapSlice = createSlice({
    name: 'map',
    initialState: {
        mapData: null,
    },
    reducers: {
        addMapData: (state, action) => {
            state.mapData = action.payload;
        },
    },
    extraReducers: (builder) => {},
});

export const { addMapData } = mapSlice.actions;

export default mapSlice.reducer;