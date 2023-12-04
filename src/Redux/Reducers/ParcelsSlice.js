import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ip from '../../ipAdresse';

// Define the initial state
const initialState = {
    parcels: [],
    parcel: null,
    status: 'idle',
    error: null,
};

// Define the async thunk to fetch data from the API
export const fetchParcels = createAsyncThunk('parcel/fetchParcels', async () => {
    const response = await axios.get(`${ip}/api/parcels`);
    console.log("data parcel", response)
    return response.data;
});

// Define the async thunk to create a new site
export const createParcel= createAsyncThunk('ligne/createParcel', async (newParcel) => {
    const response = await axios.post(`${ip}/api/lignes`, newParcel);
    return response.data;
});

// Create a slice
const parcelsSlice = createSlice({
    name: 'farm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchParcels.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchParcels.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.parcels = action.payload;
        })
        .addCase(fetchParcels.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(createParcel.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(createParcel.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.parcel =  action.payload;
            state.parcels.push(state.parcel);
        })
        .addCase(createParcel.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default parcelsSlice.reducer;

