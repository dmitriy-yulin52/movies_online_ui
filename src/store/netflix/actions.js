import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";
import {API_KEY, TMBD_BASE_URL} from "../../utils/constants";
import axios from "axios";


export const getGenres = createAsyncThunk('netflix/genres', async () => {
    const {data} = await api.getGenres()
    return data.genres
})

const createArrayFromRawData = (array, moviesArray, genres) => {
    array.forEach((movie) => {
        const movieGenres = []
        movie.genre_ids.forEach((ids) => {
            const genre_name = genres.find(genre => genre.id === ids)
            if (genre_name) movieGenres.push(genre_name.name)
        })
        if (movie.backdrop_path) {
            moviesArray.push({
                id: movie.id,
                name: movie?.original_name ? movie.original_name : movie.original_title,
                image: movie.backdrop_path,
                genres: movieGenres.slice(0, 3)
            })
        }
    })
}

const getRawData = async (api, genres, paging) => {
    const moviesArray = [];
    for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
        const {data} = await axios.get(`${api}${paging ? `&page=${i}` : ''}`)
        createArrayFromRawData(data.results, moviesArray, genres)
    }
    return moviesArray
}
export const fetchMovies = createAsyncThunk('netflix/trending',
    async ({type}, thunkApi) => {
        const {netflix} = thunkApi.getState()
        return getRawData(
            `${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
            netflix.genres,
            true
        )
    })
