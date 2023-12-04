import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ip from '../../ipAdresse';

// Define the initial state
const initialState = {
    frams: [],
    farm: null,
    status: 'idle',
    error: null,
    loading : false,
};

// Define the async thunk to fetch data from the API
export const fetchFarms = createAsyncThunk('farm/fetchFarms', async () => {
    const response = await axios.get(`${ip}/api/farms`);
    console.log("data farm", response)
    return response.data;
});

// export const fetchFarms = createAsyncThunk(
//     'farm/fetchFarms',
//     async (_, { rejectWithValue }) => {
//         try {
//             const response = await axios.get(`${ip}/api/farms`);
//             console.log("fetch Farms",response.data);
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(error.response.data);
//         }
//     }
// );

// Define the async thunk to create a new site
export const createFarms = createAsyncThunk(
    'farm/createFarms',
    async (newFarms, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${ip}/api/farms`, newFarms);
            console.log("farms created ",response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

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

