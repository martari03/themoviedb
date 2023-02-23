import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Header} from "../../components";

const MainLayout = ({switchTheme, theme}) => {
    return (
        <div>
            <Header switchTheme={switchTheme} theme={theme}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};