import {useSelector} from "react-redux";

import {GenreFilter} from "../GenreFilter/GenreFilter";

const GenresFilter = () => {
    const {genres} = useSelector(state => state.genre);
    const getGenres = genres.genres;

    return (
        <ul className={"css.filter"}>
            {
                getGenres && getGenres.map(genre => <GenreFilter key={genre.id} genre={genre}/>)
            }
        </ul>
    );
};

export {GenresFilter};