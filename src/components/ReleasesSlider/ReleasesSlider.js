import {useEffect} from "react";
import {Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useDispatch, useSelector} from "react-redux";

import css from './RelesesSlider.module.css';
import app from '../../App.css';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {genreActions, movieActions} from "../../redux";
import {Skeleton} from "../Skeleton/Skeleton";
import {moviesCategories} from "../../services";
import {MovieListCard} from "../MovieListCard/MovieListCard";


const ReleasesSlider = () => {
    const dispatch = useDispatch();
    const {moviesUpcoming, isLoading} = useSelector(state => state.movies);
    const {genres} = useSelector(state => state.genres);

    const {results} = moviesUpcoming;

    useEffect(() => {
        dispatch(genreActions.getAllGenres());
        dispatch(movieActions.getAllUpcomingMovies({moviesType: moviesCategories.moviesFor('upcoming')}));
    }, [dispatch]);

    return (
        <section className={css.releases}>
            <div className={app.container}>
                <h3 className={`${css.title} ${app.category}`}>
                    New Releases
                </h3>
                <ul className={css.releases__movies}>
                    <Swiper
                        slidesPerView={5.5}
                        spaceBetween={60}
                        loop={true}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, Autoplay, Pagination]}>

                        {
                            genres && results && results.map((movie) =>
                                <SwiperSlide key={movie.id} virtualIndex={movie.id}>
                                    {isLoading ?
                                        <Skeleton key={movie.id} amount={1} styleCard={css.releases__skeleton}/>
                                        :
                                        <MovieListCard key={movie.id} movie={movie} genres={genres.genres}/>
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

export {ReleasesSlider};