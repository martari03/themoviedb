import {Link} from "react-router-dom";

import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";
import {urls} from "../../configs";

const MovieListCard = ({
                           styleCard,
                           styleGenre,
                           styleTitle,
                           movie: {id, title, vote_average, poster_path, genre_ids},
                           genres
                       }) => {
    const img = `${urls.imgBase}w500/${poster_path}`;

    return (
        <div>
            {
                poster_path ?
                    <li>
                        <Link className={`${'css.card'} ${styleCard}`} to={`${id}`}
                              style={{backgroundImage: `url(${img})`}}>
                            <div className={'css.card__wrapper'}>
                                <GenreBadge styleGenre={styleGenre} genreIds={genre_ids} genres={genres}/>
                                <StarsRating value={vote_average}/>
                                <h3 className={`${'css.title'} ${`${styleTitle}` || ' css.card__title'}`}>
                                    {title}
                                </h3>
                            </div>
                        </Link>
                    </li>
                    :
                    ''
            }
        </div>
    );
};

export {MovieListCard};