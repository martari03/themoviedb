import {Link} from "react-router-dom";

import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";

const MovieListCard = ({
                           styleCard,
                           styleGenre,
                           styleTitle,
                           movie: {id, title, vote_average, poster_path, genre_ids},
                           genres
                       }) => {
    const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const rating = vote_average / 2;

    return (
        <>
            {
                poster_path ?
                    <li>
                        <Link className={`${'css.card'} ${styleCard}`} to={`movie/${id}`}
                              style={{backgroundImage: `url(${img})`}}>
                            <div className={'css.card__wrapper'}>
                                <GenreBadge styleGenre={styleGenre} genreIds={genre_ids} genres={genres}/>
                                <StarsRating value={rating}/>
                                <h3 className={`${'css.title'} ${`${styleTitle}` || ' css.card__title'}`}>
                                    {title}
                                </h3>
                            </div>
                        </Link>
                    </li>
                    :
                    ''
            }
        </>
    );
};

export {MovieListCard};