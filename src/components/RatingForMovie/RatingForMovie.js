import {Rating} from "@mui/material";

import css from '../../scss/_global.module.scss';

const RatingForMovie = ({value}) => {

    return (
        <div className={css.rating}>
            <Rating name="read-only" value={value} readOnly precision={0.5}/>
        </div>
    );
};

export {RatingForMovie};