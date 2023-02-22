import {Link} from 'react-router-dom';

import css from "./Header.module.scss";

import sun from '../../assets/images/icons/sun.png'
import moon from '../../assets/images/icons/moon.png'

const Header = ({switchTheme, theme}) => {
    return (
        <header className={css.header}>
            <div className={css.container}>
                <div className={css.header__inner}>
                    <Link className={css.header__logo} to={"/"}>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_712_658)">
                                <g filter="url(#filter0_d_712_658)">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M13.3806 9.28614V46.0584C13.3805 47.1675 13.8902 48.1952 14.723 48.7648C15.5558 49.3343 16.5891 49.3621 17.4444 48.8378L47.4732 30.4517C48.3695 29.9026 48.9288 28.8345 48.9288 27.6722C48.9288 26.51 48.3695 25.4419 47.4732 24.8928L17.4444 6.50667C16.5891 5.98241 15.5558 6.01015 14.723 6.57973C13.8902 7.14931 13.3805 8.17698 13.3806 9.28614Z"
                                          stroke="url(#paint0_linear_712_658)" strokeWidth="1.5"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <g filter="url(#filter1_d_712_658)">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M12.2083 45.4207L48.6377 40.4115C49.7365 40.2605 50.6852 39.6155 51.136 38.7129C51.5868 37.8103 51.4736 36.7828 50.8377 36.007L28.5324 8.76264C27.8663 7.94951 26.732 7.54086 25.5805 7.69918C24.4291 7.85751 23.4472 8.55714 23.0253 9.51988L8.90113 41.7734C8.49826 42.6921 8.6665 43.712 9.34422 44.4594C10.0219 45.2068 11.1095 45.5718 12.2083 45.4207Z"
                                          stroke="url(#paint1_linear_712_658)" strokeWidth="1.5"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_712_658" x="5.07942" y="2.4426" width="52.1519"
                                        height="58.4593" filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feColorMatrix type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_712_658"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_658"
                                             result="shape"/>
                                </filter>
                                <filter id="filter1_d_712_658" x="-4" y="0" width="64.0034" height="58.614"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feColorMatrix type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_712_658"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_658"
                                             result="shape"/>
                                </filter>
                                <linearGradient id="paint0_linear_712_658" x1="14.283" y1="6.13214" x2="55.2841"
                                                y2="41.0114" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0FEFFD"/>
                                    <stop offset="0.515718" stopColor="#FF00F5"/>
                                    <stop offset="0.776042" stopColor="#0FEFFD" stopOpacity="0"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_712_658" x1="8.96073" y1="44.9563" x2="37.9296"
                                                y2="-0.413897" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#0FEFFD"/>
                                    <stop offset="0.515718" stopColor="#FF00F5"/>
                                    <stop offset="0.776042" stopColor="#0FEFFD" stopOpacity="0"/>
                                </linearGradient>
                                <clipPath id="clip0_712_658">
                                    <rect width="56" height="56" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <nav className={css.header__nav}>
                        <div className={css.header__icon}>
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M10 12.6654C13.2213 12.6654 15.8327 10.054 15.8327 6.83268C15.8327 3.61138 13.2213 1 10 1C6.77874 1 4.16736 3.61138 4.16736 6.83268C4.16736 10.054 6.77874 12.6654 10 12.6654Z"
                                      stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path
                                    d="M19 21.1492C17.6517 17.335 14.0455 14.785 10 14.785C5.9545 14.785 2.34834 17.335 1 21.1492"
                                    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className={css.header__user}>Alex</span>
                        </div>
                        <Link className={css.header__icon} to="/">
                            <svg width="20" height="20" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M16.7288 6.82923L14.8639 5.42294V1.53465H12.1992V3.41232L8.99982 1L1.26804 6.82923C1.10858 6.97709 1.01253 7.18091 1 7.39801V16.3008C1.00078 16.6846 1.31152 16.9956 1.69533 16.9968H16.3015C16.6853 16.9956 16.996 16.6846 16.9968 16.3008V7.39872C16.9845 7.18137 16.8884 6.97726 16.7288 6.82923Z"
                                      stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        <button className={css.header__btn} onClick={switchTheme}>
                            <img width={35} height={35} src={theme === 'light' ? sun : moon} alt=""/>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export {Header};