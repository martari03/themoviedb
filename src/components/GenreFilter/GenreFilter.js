import {useDispatch} from "react-redux";

import {searchActions} from "../../redux";

import css from './GenreFilter.module.css';
import genreCSS from '../GenreBadge/GenreBadge.module.css';

const GenreFilter = ({genre}) => {
    const {id, name} = genre;

    const dispatch = useDispatch();

    return (
        <li>
            <button
                className={`${css.filter__item} ${genreCSS.genre}`}
                onClick={() => dispatch(searchActions.setGenre(id))}
                type={'button'}
            >
                {name}
            </button>
        </li>
    );
};

export {GenreFilter};