import {apiService} from "./apiService";
import {apiKey, urls} from "../configs";

const moviesCategories = {
    discover: `/discover${urls.movie}?${apiKey}`,
    moviesFor: (moviesType, genre, page) => `${urls.movie}/${moviesType}?${apiKey}&with_genres=${genre || null}&page=${page || 1}`,
    search: (value, page) => `search${urls.movie}?${apiKey}&query=${value}&page=${page}`
}

const movieService = {
    getAllMovies: (moviesType) => apiService.get(moviesType),
    searchMovies: (value) => apiService.get(value),
    getMovieById: (id) => apiService.get(`${urls.movie}/${id}?${apiKey}`),
    getVideo: (id) => apiService.get(`${urls.movie}/${id}/videos?${apiKey}`),
};

export {movieService, moviesCategories};