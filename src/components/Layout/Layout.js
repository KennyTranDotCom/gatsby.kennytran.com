import React, { useEffect } from 'react';
import { Script } from "gatsby"
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
        <>
            <Script id="script-tawk-to">{`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src='https://embed.tawk.to/633ea59e37898912e96d2a89/1gembdt29';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();`}</Script>
            <div data-is-root-path={isHomePage}>
                <Header />

                <Main>{children}</Main>

                <Footer />

                <Cursor path={path} />
                <ToastContainer />
            </div>
        </>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    isHomePage: PropTypes.bool,
};
