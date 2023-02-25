import {Link} from "react-router-dom";

import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";
import {urls} from "../../configs";

import css from "../MainSlider/MainSlider.module.css";
import app from '../../App.css';


const MainSlide = ({movie: {id, backdrop_path, original_title, overview, vote_average, genre_ids}, genres}) => {
    const img = `${urls.imgBase}original/${backdrop_path}`;

    return (
        <li className={css.mainScreenBackground}
            style={{backgroundImage: `url(${img})`}}>
            <div className={app.container}>
                <div className={css.mainScreenInfo}>
                    <div className={css.genres}><GenreBadge genreIds={genre_ids} genres={genres}/></div>
                    <StarsRating value={vote_average}/>
                    <h1 className={`${css.mainScreenTitle} ${app.title}`}>
                        {original_title}
                    </h1>
                    <div className={css.mainScreenDescription}>
                        <p>
                            {overview}
                        </p>
                    </div>
                    <button className={`${css.button}`} type={'button'}>
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