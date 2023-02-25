import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import {movieService} from "../../services";
import {GenreBadge, PosterPreview, StarsRating} from "../../components";
import {urls} from "../../configs";
import {Trailer} from "../Trailer/Trailer";

import css from './MovieInfo.module.css';

const MovieInfo = () => {
    const {movieId} = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);
    const [video, setVideo] = useState([]);

    const img = `${urls.imgBase}original/${movie && movie.backdrop_path}`;

    const {genres} = useSelector(state => state.genres);
    const mGenres = genres.genres;

    const movies = movie && movie;


    useEffect(() => {
        movieService.getVideo(movieId).then(({data: video}) => setVideo(video.results));
        movieService.getMovieById(movieId).then(({data: movie}) => setMovie(movie));
    }, [movieId]);

    if (!movie) {
        return 'loading...'
    }

    return (
        <div>
            {
                video.length !== 0 ?
                    <section className={css.movie} style={{backgroundImage: `url(${img})`}}>
                        <div className={css.container}>
                            <div className={css.movie__wrapper}>
                                <PosterPreview poster_path={movies.poster_path}/>
                                <div className={css.movie__info}>
                                    <h3 className={css.movie__title}>
                                        {movies.title}
                                    </h3>
                                    <div className={css.movie__date}>
                                        <span className={css.movie__line}>Year: {movies.release_date}</span>
                                        <span className={css.movie__line}>Time: {movies.runtime} min</span>
                                        <span className={css.movie__line}>Adult: {movies.adult ? '18+' : '12+'}</span>
                                    </div>
                                    <div className={css.movie__more}>
                                        <span className={css.movie__country}>Countries:</span>
                                        {
                                            movies.production_countries.length !== 0 ? movies.production_countries.map((country, index) =>
                                                    <span className={css.movie__line} key={index}>
                                                {country.iso_3166_1}
                                        </span>
                                            ) : 'Unknown'
                                        }
                                    </div>
                                    <div className={css.movie__more}>
                                        <span className={css.movie__genre}>Genres:</span>
                                        {
                                            movies.genres.map(genre =>
                                                    <span className={css.movie__line} key={genre.id}>
                                        <GenreBadge genres={mGenres}
                                                    genreIds={[genre.id]}/>
                                                    </span>
                                            )
                                        }
                                    </div>
                                    <StarsRating value={movies.vote_average}/>
                                    <div className={"movie__overview"}>
                                        <p>
                                            {movies.overview}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Trailer video={video}/>
                        </div>
                    </section>
                    :
                    navigate("*", {replace: true})
            }
        </div>
    );
};


export {MovieInfo};