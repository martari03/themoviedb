import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviesPage, NotFoundPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<MoviesPage/>}>
                    <Route path={'movie/:id'} element={<MovieInfoPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {
    App
};