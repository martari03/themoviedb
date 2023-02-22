const GenreBadge = ({genreIds, styleGenre, genres, allGenre}) => {

    return (
        <span className={`${`${styleGenre}` || "css.card__genre"} ${"css.genre"}`}>
            {genreIds && genreIds.length > 0 ?
                genres && genres.map((genre, i) => genre.id === genreIds[allGenre ? i : 0] ? genre.name : '')
                :
                'No genre'
            }
        </span>
    );
};

export {GenreBadge};