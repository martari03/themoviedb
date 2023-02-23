import {Outlet} from "react-router-dom";

import {MainSlider, MovieList, ReleasesSlider, ShowsSlider} from "../../components";

const MoviesPage = () => {
    return (
        <div>
            <div className={'info'}><Outlet/></div>
            <MainSlider/>
            <ReleasesSlider/>
            <MovieList/>
            <ShowsSlider/>
        </div>
    );
};

export {MoviesPage};