import {Link} from "react-router-dom";

import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";
import {urls} from "../../configs";

const MainSlide = ({movie: {id, backdrop_path, original_title, overview, vote_average, genre_ids}, genres}) => {
    const img = `${urls.imgBase}original/${backdrop_path}`;

    return (
        <li className={'css.mainScreen__background'}
            style={{backgroundImage: `url(${img})`}}>
            <div className={'css.container'}>
                <div className={'css.mainScreen__info'}>
                    <GenreBadge genreIds={genre_ids} genres={genres}/>
                    <StarsRating value={vote_average}/>
                    <h1 className={`${'css.mainScreen__title'} ${'css.title'}`}>
                        {original_title}
                    </h1>
                    <div className={'css.mainScreen__description'}>
                        <p>
                            {overview}
                        </p>
                    </div>
                    <button className={`${'css.button'}`} type={'button'}>
                        <Link to={`${id}`}>
                            Watch Now
                        </Link>
                    </button>
                </div>
            </div>
        </li>
    );
};

export {MainSlide};