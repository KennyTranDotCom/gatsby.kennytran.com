import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Jumbotron.scss';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger, SplitText);

const Jumbotron = ({ mount, text }) => {
    const headingRef = useRef(null);
    const jumbotronRef = useRef(null);

    useEffect(() => {
        if (mount) {
            setTimeout(function () {
                const timeline = gsap.timeline({
                    delay: 0.5,
                    paused: true,
                });

                const headingSplit = new SplitText(headingRef.current, {
                    type: 'lines',
                    linesClass: 'line',
                });

                const headingLines = headingSplit.lines;

                headingLines.forEach((element) => {
                    const span = element.getElementsByTagName('span');

                    element.appendChild(span[0].cloneNode(true));
                    element.appendChild(span[0].cloneNode(true));
                    element.appendChild(span[0].cloneNode(true));
                });

                timeline.staggerTo(
                    headingLines,
                    2,
                    {
                        y: '0',
                        opacity: '1',
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                    },
                    0.02
                );

                ScrollTrigger.matchMedia({
                    '(min-width: 480px)': function () {
                        gsap.set(jumbotronRef.current, {
                            opacity: 1,
                        });

                        gsap.set(headingLines, {
                            y: '100%',
                            opacity: 0,
                        });

                        timeline.play();
                    },
                });

                gsap.to(headingRef.current, {
                    x: '-50vw',
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        endTrigger: jumbotronRef.current,
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }, 100);
        }
    }, [mount]);

    return (
        <div className="c-jumbotron" ref={jumbotronRef}>
            <div
                className="c-jumbotron__title"
                data-nosnippet
                dangerouslySetInnerHTML={{
                    __html: text,
                }}
                ref={headingRef}
            ></div>
        </div>
    );
};

export default Jumbotron;
