import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ip from '../../ipAdresse';

export const getAllSites = createAsyncThunk('site/getSites', async ({ rejectWithValue }) => {
    try {
        const response = await axios.get(`${ip}/api/site/getSites`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Site Slice
const siteSlice = createSlice({
    name: 'site',
    initialState: {
        site: null,
        loading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllSites.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllSites.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.site = payload;
        })
        .addCase(getAllSites.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        })
    },
});

export default siteSlice.reducer;