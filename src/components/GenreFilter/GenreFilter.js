import {useDispatch} from "react-redux";

import css from "../GenresFilter/GenresFilter.module.scss";

import {searchActions} from "../../redux";

const GenreFilter = ({genre: {id, name}}) => {
    const dispatch = useDispatch();

    return (
        <li>
            <button
                className={`${css.filter__item} ${css.genre}`}
                onClick={() => dispatch(searchActions.setGenre(id))}
                type={'button'}
            >
                {name}
            </button>
        </li>
    );
};

export {GenreFilter};