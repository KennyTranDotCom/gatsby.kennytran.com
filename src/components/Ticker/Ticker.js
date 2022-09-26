import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Ticker.scss';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger);

const Ticker = ({ data }) => {
    const TickerRef = useRef(null);

    useEffect(() => {
        const speed = 50;

        let ticker = document.querySelector('.c-ticker');
        let tickerHTML = ticker.innerHTML;
        ticker.innerHTML += tickerHTML;
        ticker.innerHTML += tickerHTML;
        let tickerWidth =
            document.querySelector('.c-ticker__slides').offsetWidth;
        let duration = tickerWidth / speed;

        gsap.to('.c-ticker__slides', {
            duration: duration,
            ease: 'none',
            repeat: -1,
            xPercent: -100,
        });
    }, []);

    return (
        <div className="c-ticker" ref={TickerRef}>
            <ul className="c-ticker__slides">
                {data.edges.map((edge, index) => (
                    <li className="c-ticker__slide" key={index}>
                        <a
                            href={edge.node.url}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img
                                src={edge.node.icon.publicURL}
                                alt={edge.node.name}
                                width="160"
                                height="80"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Ticker;
