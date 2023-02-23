import {useDispatch} from "react-redux";

import {searchActions} from "../../redux";

const GenreFilter = ({genre}) => {
    const {id, name} = genre;

    const dispatch = useDispatch();

    return (
        <li>
            <button
                className={`${'css.filter__item'} ${'css.genre'}`}
                onClick={() => dispatch(searchActions.setGenre(id))}
                type={'button'}
            >
                {name}
            </button>
        </li>
    );
};

export {GenreFilter};