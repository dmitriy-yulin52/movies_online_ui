import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";
import {API_KEY, SERVER_BASE_URL, TMBD_BASE_URL} from "../../utils/constants";
import {getRawData} from "./utils";
import axios from "axios";


export const getGenres = createAsyncThunk('netflix/genres', async () => {
    const {data} = await api.getGenres()
    return data.genres
})

export const fetchMovies = createAsyncThunk('netflix/trending',
    ({type}, thunkApi) => {
        const {netflix} = thunkApi.getState()
        return getRawData(
            `${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
            netflix.genres,
            true
        )
    })

export const fetchDataByGenre = createAsyncThunk('netflix/genre',
    async ({genres, genre, type}, thunkApi) => {

        const {netflix} = thunkApi.getState()
        return getRawData(
            `${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`,
            netflix.genres,
            true
        )
    })


export const getUserLikedMovies = createAsyncThunk('netflix/getLiked', async (email) => {
    const {data} = await axios.get(`${SERVER_BASE_URL}/api/user/liked/${email}`)
    return data.movies
})

export const removeFromLikedMovies = createAsyncThunk('netflix/deleteLiked', async ({email,movieId}) => {

    const {data} = await axios.put(`${SERVER_BASE_URL}/api/user/delete`,{
        email,movieId
    })
    console.log(data)
    return data.movies
})