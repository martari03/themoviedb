import css from './GenreBadge.module.css';

const GenreBadge = ({genreIds, genres, allGenre}) => {
    return (
        <span className={`${css.showGenre || css.cardGenre} ${css.genre}`}>
            {genreIds && genreIds.length > 0 ?
                genres && genres.map((genre, i) => genre.id === genreIds[allGenre ? i : 0] ? genre.name : '')
                :
                'No genre'
            }
        </span>
    );
};

export {GenreBadge};