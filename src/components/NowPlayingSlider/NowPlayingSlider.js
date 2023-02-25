import {useEffect} from "react";
import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useDispatch, useSelector} from "react-redux";

import {Skeleton} from "../Skeleton/Skeleton";
import {moviesCategories} from "../../services";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {genreActions, movieActions} from "../../redux";

import genreCSS from '../GenreBadge/GenreBadge.module.css';
import css from './NowPlayingSlider.module.css';
import app from '../../App.css';
import releases from '../../components/ReleasesSlider/RelesesSlider.module.css';

const NowPlayingSlider = () => {
    const dispatch = useDispatch();
    const {moviesNowPlaying, isLoading} = useSelector(state => state.movies);
    const {genres} = useSelector(state => state.genres);

    const {results} = moviesNowPlaying;

    useEffect(() => {
        dispatch(genreActions.getAllGenres());
        dispatch(movieActions.getAllNowPlayingMovies({moviesType: moviesCategories.moviesFor('now_playing')}));
    }, [dispatch]);

    return (
        <section className={css}>
            <div className={app.container}>
                <h3 className={`${css.title} ${app.category}`}>
                    Now Playing
                </h3>
                <ul className={`${css.shows__movies} ${releases.releases__movies}`}>
                    <Swiper
                        slidesPerView={5.5}
                        spaceBetween={60}
                        loop={true}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                        }}
                        modules={[Navigation, Autoplay]}>

                        {
                            results && results.map((movie) =>
                                <SwiperSlide key={movie.id} virtualIndex={movie.id}>
                                    {isLoading ?
                                        <Skeleton key={movie.id} amount={1} styleCard={css.shows__skeleton}/>
                                        :
                                        <MovieListCard key={movie.id}
                                                       movie={movie}
                                                       styleCard={css.shows__movie}
                                                       styleTitle={css.shows__title}
                                                       styleGenre={genreCSS.showGenre}
                                                       genres={genres.genres}/>
                                    }
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </ul>
            </div>
        </section>
    );
};

export {NowPlayingSlider};