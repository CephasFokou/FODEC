import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ip from '../../ipAdresse';

// Define the initial state
const initialState = {
    fruits: [],
    fruit: null,
    status: 'idle',
    error: null,
};

// Define the async thunk to fetch data from the API
export const fetchFruit = createAsyncThunk('fruit/fetchFruit', async () => {
    const response = await axios.get(`${ip}/api/fruits`);
    console.log("data ", response)
    return response.data;
});

// Define the async thunk to create a new site
export const createFruit= createAsyncThunk('fruit/createFruit', async (newFruit) => {
    const response = await axios.post(`${ip}/api/fruits`, newFruit);
    return response.data;
});

// Create a slice
const fruitSlice = createSlice({
    name: 'farm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchFruit.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchFruit.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.fruits = action.payload;
        })
        .addCase(fetchFruit.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(createFruit.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(createFruit.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.fruit =  action.payload;
            state.fruits.push(state.fruit);
        })
        .addCase(createFruit.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default fruitSlice.reducer;

