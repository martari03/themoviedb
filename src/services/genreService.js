import {apiService} from "./apiService";
import {apiKey, urls} from "../configs";

const genreService = {
    getAllGenres: () => apiService.get(`${urls.genre}${urls.movie}/list?${apiKey}`)
};


export {genreService};