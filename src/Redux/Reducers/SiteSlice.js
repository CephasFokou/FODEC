import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
    sites: [],
    status: 'idle',
    error: null,
};

// Define the async thunk to fetch data from the API
export const fetchSites = createAsyncThunk('sites/fetchSites', async () => {
    const response = await axios.get('http://34.207.245.143:8080/api/sites');
    console.log("data", response)
    return response.data;
});

// Create a slice
const siteSlice = createSlice({
    name: 'sites',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchSites.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchSites.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.sites = action.payload;
        })
        .addCase(fetchSites.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default siteSlice.reducer;