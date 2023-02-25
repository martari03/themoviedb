import React from 'react';
import {urls} from "../../configs";

const PosterPreview = ({poster_path}) => {
    const img = `${urls.imgBase}w500/${poster_path}`;

    return (
        <div>
            <img src={img} alt={'poster'} height={400}/>
        </div>
    );
};

export {PosterPreview};