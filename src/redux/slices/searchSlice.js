import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    searchValue: '',
    totalPages: 0,
    currentPage: 1,
    currentGenre: 0
};

const searchSlice = createSlice({
        name: 'searchSlice',
        initialState,
        reducers: {
            setSearchValue(state, action) {
                state.searchValue = action.payload;
            },
            setTotalPages(state, action) {
                state.totalPages = action.payload;
            },
            setCurrentPage(state, action) {
                state.currentPage = action.payload;
            },
            setGenre(state, action) {
                state.currentGenre = action.payload;
            }
        }
    }
);

const {reducer: searchReducer, actions: {setSearchValue, setGenre, setTotalPages, setCurrentPage}} = searchSlice;

const searchActions = {
    setSearchValue,
    setGenre,
    setTotalPages,
    setCurrentPage
};

export {searchActions, searchReducer};