import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import TransitionLink from 'gatsby-plugin-transition-link';

import SVGLogoKennyTran from '../../assets/images/logo-kenny-tran.svg';

import './Header.scss';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger, ScrollToPlugin);

const Header = (props) => {
    const [navVisible, setNavVisible] = useState(false);
    const headerRef = useRef(null);
    const headerCTA = useRef(null);

    const toggleNavVisible = () => setNavVisible(!navVisible);

    const scrollToFooter = (event) => {
        gsap.to(window, { duration: 1, scrollTo: '#footer' });
    };

    const entryTransition = {
        trigger: () => toggleNavVisible(),
    };

    useEffect(() => {
        const timeline = gsap.timeline({
            delay: 0.5,
            paused: true,
        });

        timeline.to(headerRef.current, {
            duration: 2,
            ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
            opacity: '1',
            y: '0',
        });

        ScrollTrigger.matchMedia({
            '(min-width: 480px)': function () {
                timeline.play();
            },
        });
    }, []);

    return (
        <>
            <header className="c-header" ref={headerRef}>
                <div className="o-container">
                    <div className="c-header__inner">
                        <i className="c-header__logo">
                            <TransitionLink to="/">
                                <SVGLogoKennyTran />
                            </TransitionLink>
                        </i>
                        <button
                            className="c-header__nav-trigger"
                            aria-controls="header-nav"
                            aria-expanded={navVisible}
                            onClick={toggleNavVisible}
                        >
                            Menu
                            <span></span>
                        </button>
                        <nav
                            id="header-nav"
                            className="c-header__nav"
                            hidden={!navVisible}
                        >
                            <ul className="c-header__menu">
                                <li>
                                    <TransitionLink
                                        to="/about"
                                        entry={entryTransition}
                                    >
                                        About
                                    </TransitionLink>
                                </li>
                                <li>
                                    <TransitionLink
                                        to="/working-with-me"
                                        entry={entryTransition}
                                    >
                                        Working With Me
                                    </TransitionLink>
                                </li>
                                {/* <li>
                                    <TransitionLink
                                        to="/posts"
                                        entry={entryTransition}
                                    >
                                        Posts
                                    </TransitionLink>
                                </li> */}
                            </ul>
                        </nav>
                        <button
                            className="c-header__cta o-button-pill"
                            onClick={scrollToFooter}
                            ref={headerCTA}
                        >
                            Start a Project
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
