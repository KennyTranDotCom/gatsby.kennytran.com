import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Content.scss';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger);

const Content = ({ children }) => {
    const ContentRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({
            delay: 1,
            paused: true,
        });

        timeline.to(ContentRef.current, {
            duration: 2,
            ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
            opacity: '1',
            y: '0',
        });

        ScrollTrigger.matchMedia({
            '(min-width: 480px)': function () {
                gsap.set(ContentRef.current, {
                    y: '100px',
                    opacity: 0,
                });

                timeline.play();
            },
        });
    }, []);

    return (
        <div className="c-content" ref={ContentRef}>
            {children}
        </div>
    );
};

export default Content;
