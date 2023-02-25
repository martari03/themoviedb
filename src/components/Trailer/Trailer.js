import React from 'react';

import css from '../MovieInfo/MovieInfo.module.css';

const Trailer = ({video}) => {
    return (
        <div className={css.movie__video}>
            {/*<Swiper*/}
            {/*    slidesPerView={1}*/}
            {/*    loop={true}*/}
            {/*    autoplay={{*/}
            {/*        delay: 3500,*/}
            {/*    }}*/}
            {/*    pagination={{*/}
            {/*        clickable: true,*/}
            {/*    }}*/}
            {/*    navigation={true}*/}
            {/*    modules={[Pagination, Navigation]}*/}
            {/*>*/}
            {
                // video.map((vid, index) =>
                //     <SwiperSlide key={vid.id} virtualIndex={vid.id}>
                //         {
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
                // )
            }
            {/*//             </SwiperSlide>*/}
            {/*        )*/}
            {/*    }*/}
            {/*// </Swiper>*/}
        </div>
    );
};

export {Trailer};