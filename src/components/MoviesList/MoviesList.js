import {Pagination} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from "./MoviesList.module.scss";

import {Search} from "../Search/Search";
import {filterActions} from "../../redux";
import {Skeleton} from "../Skeleton/Skeleton";
import {MovieCard} from "../MovieCard/MovieCard";
import {GenresFilter} from "../GenresFilter/GenresFilter";
import {moviesCategories, movieService} from "../../services";

const MoviesList = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genre);
    const {searchValue, totalPages, currentPage, currentGenre} = useSelector(state => state.filter);

    const [foundMovies, setFoundMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const {results, total_pages} = foundMovies;

    const getSearchMovies = async () => {
        if (searchValue) {
            try {
                const {data} = await movieService.search(moviesCategories.search(searchValue, currentPage));
                setFoundMovies(data);
                dispatch(filterActions.setTotalPages(data.total_pages));
            } catch (e) {
                alert('error!');
            }
        }
    };

    const getMovies = async () => {
        try {
            setIsLoading(true);
            const {data} = await movieService.getAll(moviesCategories.moviesFor(
                'popular',
                currentGenre,
                currentPage
            ));
            setFoundMovies(data);
            setIsLoading(false);
        } catch (e) {
            alert('error!');
        }
    };

    useEffect(() => {
        getMovies();
        getSearchMovies();
    }, [getMovies, getSearchMovies, searchValue, currentPage, currentGenre]);

    useEffect(() => {
        if (total_pages) {
            dispatch(filterActions.setTotalPages(total_pages));
        }
    }, [total_pages]);

    const filteredMovies = results && results.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <section className={css.movies}>
            <div className={css.container}>
                <div className={css.movies__inner}>
                    <h3 className={`${css.movies__title} ${css.category}`}>
                        All Movies
                    </h3>
                    <div className={css.movies__wrapper}>
                        <GenresFilter/>
                        <Search/>
                    </div>
                </div>
                <ul className={css.movies__items}>
                    {
                        isLoading ?
                            results && filteredMovies.map((movie) =>
                                <Skeleton key={movie.id} amount={20}/>
                            )
                            :
                            results && filteredMovies.map((movie) =>
                                <MovieCard
                                    key={movie.id}
                                    movie={movie}
                                    genres={genres.genres}
                                    styleCard={css.movies__item}
                                />)
                    }
                </ul>
                <Pagination
                    count={totalPages}
                    variant="outlined"
                    page={currentPage}
                    shape="rounded"
                    onChange={(_, num) => dispatch(filterActions.setCurrentPage(num))}
                />
            </div>
        </section>
    );
};

export {MoviesList};