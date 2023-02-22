import {Link} from "react-router-dom";

import css from "../MainSlider/MainSlider.module.scss";

import {GenreBadge} from "../GenreBadge/GenreBadge";
import {RatingForMovie} from "../RatingForMovie/RatingForMovie";

const MainSlide = ({movie: {id, backdrop_path, original_title, overview, vote_average, genre_ids}, genres}) => {
    const img = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
    const rating = vote_average / 2;

    return (
        <li className={css.mainScreen__background}
            style={{backgroundImage: `url(${img})`}}>
            <div className={css.container}>
                <div className={css.mainScreen__info}>
                    <GenreBadge genreIds={genre_ids} genres={genres}/>
                    <RatingForMovie value={rating}/>
                    <h1 className={`${css.mainScreen__title} ${css.title}`}>
                        {original_title}
                    </h1>
                    <div className={css.mainScreen__description}>
                        <p>
                            {overview}
                        </p>
                    </div>
                    <button className={`${css.button}`} type={'button'}>
                        <Link to={`movie/${id}`}>
                            Watch Now
                        </Link>
                    </button>
                </div>
            </div>
        </li>
    );
};

export {MainSlide};