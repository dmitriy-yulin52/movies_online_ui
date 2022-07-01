import {configureStore} from '@reduxjs/toolkit'
import NetflixSlice from "./netflix/NetflixSlice";



export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer
    }
})

window.store = store