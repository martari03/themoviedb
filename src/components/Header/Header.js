import React from "react";
import {Link} from 'react-router-dom';

import {UserInfo} from "../UserInfo/UserInfo";

import sun from '../../assets/images/icons/sun.svg';
import moon from '../../assets/images/icons/moon.svg';

import css from './Header.module.css';

const Header = ({switchTheme, theme}) => {
    return (
        <header className={css.header}>
            <div className={css.container}>
                <div className={css.header__inner}>
                    <Link className={css.header__logo} to={"/"}>
                        <svg width={56} height={56}
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512" fill="#FFFFFF">
                            <path
                                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                        </svg>
                    </Link>
                    <nav className={css.header__nav}>
                        <UserInfo/>
                        <Link className={css.header__icon} to="/">
                            <svg width={40} height={40}
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512" fill="#FFFFFF">
                                <path
                                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                            </svg>
                        </Link>
                        <button className={css.header__btn} onClick={switchTheme}>
                            <img width={40} height={40} src={theme === 'light' ?
                                sun : moon} alt=""/>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export {Header};