import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import css from './MoviePage.module.scss';

import {movieService} from "../../services";
import {StarsRating} from "../../components";

const MovieInfoPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState();
    const [video, setVideo] = useState([]);

    const rating = movie && movie.vote_average / 2;
    const img = `https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`;

    const movies = movie && movie;


    useEffect(() => {

        const fetchVideo = async () => {
            try {
                const {data} = await movieService.getVideo(id);
                await setVideo(data.results);
            } catch (e) {
                alert('error!');
            }
        };

        const fetchMovie = async () => {
            try {
                const {data} = await movieService.getMovieById(id);
                await setMovie(data);
            } catch (e) {
                alert('error!');
            }
        };

        fetchVideo();
        fetchMovie();
    }, [id]);

    if (!movie) {
        return 'loading...'
    }

    return (
        <>
            {
                video.length !== 0 ?
                    <section className={css.movie} style={{backgroundImage: `url(${img})`}}>
                        <div className={css.container}>
                            <div className={css.movie__wrapper}>
                                <div className={css.movie__video}>
                                    {video[0].key && video ?
                                        <iframe width={720} height={405}
                                                src={`https://www.youtube.com/embed/${video[0].key}`}
                                                title="YouTube
                                                 video player" allow="accelerometer; autoplay; clipboard-write;
                                                 encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                                        </iframe>
                                        :
                                        <iframe width={720} height={405}
                                                src={'https://www.youtube.com/embed/aDm5WZ3QiIE'}
                                                title="YouTube
                                                video player" allow="accelerometer; autoplay; clipboard-write;
                                                encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                                        </iframe>
                                    }
                                </div>
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
                                            movies.production_countries.map((country, index) =>
                                                    <span className={css.movie__line} key={index}>
                                                {country.iso_3166_1}
                                        </span>
                                            )
                                        }
                                    </div>
                                    <div className={css.movie__more}>
                                        <span className={css.movie__genre}>Genres:</span>
                                        {
                                            movies.genres.map(genre =>
                                                    <span className={css.movie__line} key={genre.id}>
                                            {genre.name}
                                        </span>
                                            )
                                        }
                                    </div>
                                    <StarsRating value={rating}/>
                                    <div className={"movie__overview"}>
                                        <p>
                                            {movies.overview}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    :
                    navigate("*", {replace: true})
            }
        </>
    );
};


export {MovieInfoPage};