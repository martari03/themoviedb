import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviesPage, NotFoundPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movie'}/>}/>
                <Route path={'movie'} element={<MoviesPage/>}>
                    <Route path={':id'} element={<MovieInfoPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {
    App
};