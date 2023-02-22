import {useEffect} from "react";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useDispatch, useSelector} from "react-redux";

import css from "./ShowsSlider.module.scss";

import {Skeleton} from "../Skeleton/Skeleton";
import {moviesCategories} from "../../services";
import {MovieCard} from "../MovieCard/MovieCard";
import {genreActions, movieActions} from "../../redux";

const ShowsSlider = () => {
    const dispatch = useDispatch();
    const {moviesNowPlaying, isLoading} = useSelector(state => state.movie);
    const {genres} = useSelector(state => state.genre);

    const {results} = moviesNowPlaying;

    useEffect(() => {
        dispatch(genreActions.getAll());
        dispatch(movieActions.getAllNowPlaying({moviesType: moviesCategories.moviesFor('now_playing')}));
    }, [dispatch]);

    return (
        <section className={css.shows}>
            <div className={css.container}>
                <div className={css.category}>
                    Now playing
                </div>
                <ul className={`${css.shows__movies} ${css.releases__movies}`}>
                    <Swiper
                        loop={true}
                        navigation={true}
                        slidesPerView={3.1}
                        modules={[Navigation]}>

                        {
                            results && results.map((movie) =>
                                <SwiperSlide key={movie.id} virtualIndex={movie.id}>
                                    {isLoading ?
                                        <Skeleton key={movie.id} amount={1} styleCard={css.shows__skeleton}/>
                                        :
                                        <MovieCard key={movie.id}
                                                   movie={movie}
                                                   styleCard={css.shows__movie}
                                                   styleTitle={css.shows__title}
                                                   styleGenre={css.shows__genre}
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

export {ShowsSlider};