import {MainSlider, MovieList, NowPlayingSlider, ReleasesSlider} from "../../components";

const MoviesPage = () => {
    return (
        <div>
            <MainSlider/>
            <MovieList/>
            <ReleasesSlider/>
            <NowPlayingSlider/>
        </div>
    );
};

export {MoviesPage};