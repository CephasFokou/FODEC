import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ip from '../../ipAdresse';

// Define the initial state
const initialState = {
    sites: [],
    status: 'idle',
    error: null,
};

// Define the async thunk to fetch data from the API
export const fetchSites = createAsyncThunk('sites/fetchSites', async () => {
    const response = await axios.get(`${ip}/api/sites`);
    console.log("data", response)
    return response.data;
});

// Define the async thunk to create a new site
export const createSite = createAsyncThunk('sites/createSite', async (newSite) => {
    const response = await axios.post(`${ip}/sites`, newSite);
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
        })
        .addCase(createSite.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(createSite.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.sites.push(action.payload); // Assuming the API returns the created site
        })
        .addCase(createSite.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default siteSlice.reducer;