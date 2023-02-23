import {useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {useDispatch, useSelector} from "react-redux";
import {Autoplay, Navigation, Pagination} from "swiper";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {Skeleton} from "../Skeleton/Skeleton";
import {moviesCategories} from "../../services";
import {MainSlide} from "../MainSlide/MainSlide";
import {genreActions, movieActions} from "../../redux";

const MainSlider = () => {
    const dispatch = useDispatch();
    const {moviesTopRate, isLoading} = useSelector(state => state.movies);
    const {genres} = useSelector(state => state.genres);

    const {results} = moviesTopRate;

    useEffect(() => {
        dispatch(genreActions.getAllGenres());
        dispatch(movieActions.getAllTopRateMovies({moviesType: moviesCategories.moviesFor('top_rated')}));
    }, [dispatch]);

    return (
        <section className={'css.mainScreen'}>
            <ul>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    {
                        results && results.map((movie, index) =>
                            <SwiperSlide key={movie.id} virtualIndex={movie.id}>
                                {isLoading ?
                                    <Skeleton key={index} amount={1} styleCard={'css.mainScreen__skeleton'}/>
                                    :
                                    <MainSlide key={movie.id} movie={movie} genres={genres.genres}/>
                                }
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </ul>
        </section>
    );
};


export {MainSlider};