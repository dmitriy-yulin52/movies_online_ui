import {configureStore, createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {api} from "../api/api";
import {API_KEY, TMBD_BASE_URL} from "../utils/constants";
import axios from "axios";
import NetflixSlice from "./netflix/NetflixSlice";



// return getRawData(`${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genres}`)


export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer
    }
})

window.store = store