import React from 'react';

import css from '../MovieInfo/MovieInfo.module.css';

const Trailer = ({video}) => {
    return (
        <div className={css.movie__video}>
            {
                video[0].key && video ?
                    <iframe key={video[0].id} width={720} height={405}
                            src={`https://www.youtube.com/embed/${video[0].key}`}
                            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write;
                                                 encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                    :
                    <iframe key={video[0].id} width={720} height={405}
                            src={'https://www.youtube.com/embed/aDm5WZ3QiIE'}
                            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write;
                                                 encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
            }
        </div>
    );
};

export {Trailer};