import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    moviesTopRate: [],
    moviesNowPlaying: [],
    moviesUpcoming: [],
    isLoading: false
};

const getAllTopRateMovies = createAsyncThunk(
    'movieSlice/getAllTopRateMovies',
    async ({moviesType}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllMovies(moviesType);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getAllNowPlayingMovies = createAsyncThunk(
    'movieSlice/getAllNowPlayingMovies',
    async ({moviesType}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllMovies(moviesType);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getAllUpcomingMovies = createAsyncThunk(
    'movieSlice/getAllUpcomingMovies',
    async ({moviesType}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllMovies(moviesType);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllTopRateMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllTopRateMovies.fulfilled, (state, action) => {
                state.moviesTopRate = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllTopRateMovies.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getAllNowPlayingMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllNowPlayingMovies.fulfilled, (state, action) => {
                state.moviesNowPlaying = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllNowPlayingMovies.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getAllUpcomingMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllUpcomingMovies.fulfilled, (state, action) => {
                state.moviesUpcoming = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllUpcomingMovies.rejected, (state) => {
                state.isLoading = false;
            })
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAllUpcomingMovies,
    getAllTopRateMovies,
    getAllNowPlayingMovies
};

export {movieActions, movieReducer};