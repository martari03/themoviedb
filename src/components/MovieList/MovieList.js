import {Pagination} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Search} from "../Search/Search";
import {searchActions} from "../../redux";
import {Skeleton} from "../Skeleton/Skeleton";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {GenresFilter} from "../GenresFilter/GenresFilter";
import {moviesCategories, movieService} from "../../services";

const MovieList = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genre);
    const {searchValue, totalPages, currentPage, currentGenre} = useSelector(state => state.filter);

    const [foundMovies, setFoundMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const {results, total_pages} = foundMovies;

    const getSearchMovies = async () => {
        if (searchValue) {
            try {
                const {data} = await movieService.searchMovies(moviesCategories.search(searchValue, currentPage));
                setFoundMovies(data);
                dispatch(searchActions.setTotalPages(data.total_pages));
            } catch (e) {
                alert('error!');
            }
        }
    };

    const getMovies = async () => {
        try {
            setIsLoading(true);
            const {data} = await movieService.getAllMovies(moviesCategories.moviesFor(
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
            dispatch(searchActions.setTotalPages(total_pages));
        }
    }, [total_pages, dispatch]);

    const filteredMovies = results && results.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <section className={'css.movies'}>
            <div className={'css.container'}>
                <div className={'css.movies__inner'}>
                    <h3 className={`${'css.movies__title'} ${'css.category'}`}>
                        All Movies
                    </h3>
                    <div className={'css.movies__wrapper'}>
                        <GenresFilter/>
                        <Search/>
                    </div>
                </div>
                <ul className={'css.movies__items'}>
                    {
                        isLoading ?
                            results && filteredMovies.map((movie) =>
                                <Skeleton key={movie.id} amount={20}/>
                            )
                            :
                            results && filteredMovies.map((movie) =>
                                <MovieListCard
                                    key={movie.id}
                                    movie={movie}
                                    genres={genres.genres}
                                    styleCard={'css.movies__item'}
                                />)
                    }
                </ul>
                <Pagination
                    count={totalPages}
                    variant="outlined"
                    page={currentPage}
                    shape="rounded"
                    onChange={(_, num) => dispatch(searchActions.setCurrentPage(num))}
                />
            </div>
        </section>
    );
};

export {MovieList};