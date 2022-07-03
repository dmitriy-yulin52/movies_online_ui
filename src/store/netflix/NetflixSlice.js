import {createSlice} from "@reduxjs/toolkit";
import {fetchDataByGenre, fetchMovies, getGenres} from "./actions";


const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
    loadingMovies:false
}

const NetflixSlice = createSlice({
    name: 'Netflix',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.genresLoaded = true;
            state.loadingMovies = false;
        });
        builder.addCase(getGenres.pending, (state, action) => {
            state.loadingMovies = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        });

        builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.loadingMovies = false;
        });
        builder.addCase(fetchDataByGenre.pending, (state, action) => {
            state.loadingMovies = true;
        });
    },
})



export default NetflixSlice