import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import useLocalStorage from "use-local-storage";

import './App.css';
import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviesPage, NotFoundPage} from "./pages";

const App = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'light' : 'dark');

    const switchTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    return (
        <div className='wrapper' data-theme={theme}>
            <Routes>
                <Route path={'/'} element={<MainLayout switchTheme={switchTheme} theme={theme}/>}>
                    <Route index element={<Navigate to={'movie'}/>}/>
                    <Route path={'movie'} element={<MoviesPage/>}>
                        <Route path={':movieId'} element={<MovieInfoPage/>}/>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {
    App
};