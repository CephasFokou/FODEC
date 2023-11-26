import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ip from '../../ipAdresse';

// Define the initial state
const initialState = {
    dicValues: [],
    dicValue: null,
    status: 'idle',
    error: null,
};

// Define the async thunk to fetch data from the API
export const fetchDicValues = createAsyncThunk('dicValue/fetchDicValues', async () => {
    const response = await axios.get(`${ip}/api/dictionaries/values/all`);
    console.log("data", response)
    return response.data;
});

// Find by ID the dicvalue
export const fetchDicValueById = createAsyncThunk('dicValue/fetchDicValueById', async (DicValueId) => {
    const response = await axios.get(`${ip}/api/dictionaries/values/${DicValueId}`);
    console.log("dictValue", response);
    return response.data;
});

// Define the async thunk to create a new site
export const createDicValue= createAsyncThunk('dicValue/createDicValue', async ({dictionnaryCode, newDicValue}) => {
    const response = await axios.post(`${ip}/api/dictionaries/${dictionnaryCode}/values`, newDicValue);
    return response.data;
});

// Create a slice
const dicValueSlice = createSlice({
    name: 'dicValue',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchDicValues.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchDicValues.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.dicValues = action.payload;
        })
        .addCase(fetchDicValues.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(fetchDicValueById.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchDicValueById.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.dicValue = action.payload;
        })
        .addCase(fetchDicValueById.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(createDicValue.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(createDicValue.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.dicValue =  action.payload;
            state.dicValues.push(state.dicValue);
        })
        .addCase(createDicValue.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default dicValueSlice.reducer;

