import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ip from '../../ipAdresse';

// Define the initial state
const initialState = {
    lignes: [],
    ligne: null,
    status: 'idle',
    error: null,
};

// Define the async thunk to fetch data from the API
export const fetchLines = createAsyncThunk('ligne/fetchLines', async () => {
    const response = await axios.get(`${ip}/api/lignes`);
    console.log("data", response)
    return response.data;
});

// Define the async thunk to create a new site
export const createLigne= createAsyncThunk('ligne/createLigne', async (newLigne) => {
    const response = await axios.post(`${ip}/api/lignes`, newLigne);
    return response.data;
});

// Create a slice
const ligneSlice = createSlice({
    name: 'farm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchLines.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchLines.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.lignes = action.payload;
        })
        .addCase(fetchLines.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(createLigne.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(createLigne.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.ligne =  action.payload;
            state.lignes.push(state.ligne);
        })
        .addCase(createLigne.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default ligneSlice.reducer;

