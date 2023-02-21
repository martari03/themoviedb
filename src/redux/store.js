import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, searchReducer} from "./slices";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    search: searchReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};