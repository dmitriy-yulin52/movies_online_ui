import axios from "axios";

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

export const getRawData = async (api, genres, paging) => {
    const moviesArray = [];
    for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
        const {data} = await axios.get(`${api}${paging ? `&page=${i}` : ''}`)
        createArrayFromRawData(data.results, moviesArray, genres)
    }
    return moviesArray
}