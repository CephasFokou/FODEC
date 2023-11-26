import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ip from '../../ipAdresse';

// Define the initial state
const initialState = {
    frams: [],
    farm: null,
    status: 'idle',
    error: null,
};

// Define the async thunk to fetch data from the API
export const fetchFarms = createAsyncThunk('farm/fetchFarms', async () => {
    const response = await axios.get(`${ip}/api/farms`);
    console.log("data", response)
    return response.data;
});

// Define the async thunk to create a new site
export const createFarms= createAsyncThunk('farm/createFarms', async (newFarms) => {
    const response = await axios.post(`${ip}/api/farms`, newFarms);
    return response.data;
});

// Create a slice
const farmSlice = createSlice({
    name: 'farm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchFarms.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchFarms.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.frams = action.payload;
        })
        .addCase(fetchFarms.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(createFarms.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(createFarms.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.farm =  action.payload;
            state.frams.push(state.farm);
        })
        .addCase(createFarms.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default farmSlice.reducer;

