import axios from "axios";
import {API_KEY, SERVER_BASE_URL, TMBD_BASE_URL} from "../utils/constants";



export const api = {
    getGenres(){
        return axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    },
    fetchMovies(api,paging,page){
        return axios.get(`${api}${paging ? `&page=${page}` : ''}`)
    },
    addToList(email,movieData){
        return axios.post(`${SERVER_BASE_URL}/api/user/add`,{email,data:movieData})
    }
}