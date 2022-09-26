import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Lenis from '@studio-freight/lenis';

import Cursor from '../Cursor/Cursor';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, isHomePage, path }) => {
    useEffect(() => {
        const lenis = new Lenis({
            direction: 'vertical',
            lerp: 0.1,
            smooth: true,
        });

        function raf() {
            lenis.raf();
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });

    return (
        <div data-is-root-path={isHomePage}>
            <Header />

            <Main>{children}</Main>

            <Footer />

            <Cursor path={path} />
            <ToastContainer />
        </div>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    isHomePage: PropTypes.bool,
};
