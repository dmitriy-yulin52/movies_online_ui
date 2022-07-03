import {createSlice} from "@reduxjs/toolkit";
import {fetchDataByGenre, fetchMovies, getGenres} from "./actions";


const initialState = {
    movies: [],
    genresLoaded: false,
    genres: []
}

const NetflixSlice = createSlice({
    name: 'Netflix',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.genresLoaded = true
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        });
        builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
            state.movies = action.payload;
        });
    },
})



export default NetflixSlice