import {useEffect} from "react";
import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useDispatch, useSelector} from "react-redux";

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import css from "./ReleasesSlider.module.scss";

import {genreActions, movieActions} from "../../redux";
import {Skeleton} from "../Skeleton/Skeleton";
import {moviesCategories} from "../../services";
import {MovieCard} from "../MovieCard/MovieCard";


const ReleasesSlider = () => {
    const dispatch = useDispatch();
    const {moviesUpcoming, isLoading} = useSelector(state => state.movie);
    const {genres} = useSelector(state => state.genre);

    const {results} = moviesUpcoming;

    useEffect(() => {
        dispatch(genreActions.getAll());
        dispatch(movieActions.getAllUpcoming({moviesType: moviesCategories.moviesFor('upcoming')}));
    }, [dispatch]);

    return (
        <section className={css.releases}>
            <div className={css.container}>
                <div className={css.category}>New releases</div>
                <ul className={css.releases__movies}>
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
                            genres && results && results.map((movie) =>
                                <SwiperSlide key={movie.id} virtualIndex={movie.id}>
                                    {isLoading ?
                                        <Skeleton key={movie.id} amount={1} styleCard={css.releases__skeleton}/>
                                        :
                                        <MovieCard key={movie.id} movie={movie} genres={genres.genres}/>
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