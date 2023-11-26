import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ip from '../../ipAdresse';

// Async Thunks for API Requests
export const registerUser = createAsyncThunk('auth/signUpUser', async ({ username, email, password }, { rejectWithValue }) => {
    try {
        console.log("username, email, password ", username, email, password )
        const response = await axios.post(`${ip}/api/auth/signup`, {
            username,
            email,
            role: ['ROLE_USER'],
            password,
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
  
export const loginUser = createAsyncThunk('auth/loginUser', async ({ username, password }, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${ip}/api/auth/signin`, { username, password });
        console.log("response login", response)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.post('/api/auth/logout');
        return { success: response.data.success };
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Auth Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.user = payload;
            state.token = payload.token;
            state.isAuthenticated = true;
            localStorage.setItem('user',  JSON.stringify(state.user));
            localStorage.setItem('isAuthenticated', state.isAuthenticated);
        })
        .addCase(loginUser.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        })
        .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isAuthenticated = true;
        })
        .addCase(registerUser.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        })
        .addCase(logoutUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.loading = false;
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        })
        .addCase(logoutUser.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
    },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;