import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ip from '../../ipAdresse';

// Define the initial state
const initialState = {
    trees: [],
    tree: null,
    status: 'idle',
    error: null,
};

// Define the async thunk to fetch data from the API
export const fetchTrees = createAsyncThunk('tree/fetchTrees', async () => {
    const response = await axios.get(`${ip}/api/trees`);
    console.log("data", response)
    return response.data;
});

// Define the async thunk to create a new site
export const createTree= createAsyncThunk('ligne/createTree', async (newTree) => {
    const response = await axios.post(`${ip}/api/trees`, newTree);
    return response.data;
});

// Create a slice
const treeSlice = createSlice({
    name: 'farm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTrees.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchTrees.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.trees = action.payload;
        })
        .addCase(fetchTrees.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(createTree.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(createTree.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.tree =  action.payload;
            state.trees.push(state.tree);
        })
        .addCase(createTree.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default treeSlice.reducer;

