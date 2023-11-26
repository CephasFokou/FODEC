import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ip from '../../ipAdresse';

// Define the initial state
const initialState = {
    dictionnaries: [],
    dictionnary: null,
    status: 'idle',
    error: null,
};


// Define the async thunk to fetch data from the API
export const fetchDictionnaries = createAsyncThunk('dictionnary/fetchDictionnaries', async () => {
    const response = await axios.get(`${ip}/api/dictionaries`);
    console.log("data", response)
    return response.data;
});

// Define the async thunk to create a new site
export const createDictionnaries= createAsyncThunk('dictionnary/createDictionnaries', async (newDictionnary) => {
    const response = await axios.post(`${ip}/api/dictionaries`, newDictionnary);
    return response.data;
});

// Create a slice
const dictionnarySlice = createSlice({
    name: 'dictionnary',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchDictionnaries.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchDictionnaries.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.dictionnaries = action.payload;
        })
        .addCase(fetchDictionnaries.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(createDictionnaries.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(createDictionnaries.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.dictionnary =  action.payload;
            state.dictionnaries.push(state.dictionnary);
        })
        .addCase(createDictionnaries.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default dictionnarySlice.reducer;

