import React, { useEffect, useRef } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Image.scss';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger);

const Image = ({ alt, className, image, mount, ...props }) => {
    const imageSrc = getImage(image);
    const imageRef = useRef(null);
    const imageBackgroundRef = useRef(null);
    const imageMaskRef = useRef(null);
    const imageMaskContainerRef = useRef(null);

    useEffect(() => {
        if (mount) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 75%',
                },
            });

            timeline.to(
                imageBackgroundRef.current,
                {
                    duration: 1.25,
                    ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                    scaleY: '0',
                    transformOrigin: 'top',
                },
                0
            );

            timeline.from(
                imageMaskRef.current,
                {
                    duration: 1,
                    ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                    y: '100%',
                },
                0
            );

            gsap.fromTo(
                imageRef.current,
                {
                    y: '10%',
                },
                {
                    y: '-10%',
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                }
            );
        }
    }, [mount]);

    return (
        <div
            ref={imageRef}
            className={'c-image' + (className ? ' ' + className : '')}
        >
            <div className="c-image__mask" ref={imageMaskRef}>
                <div
                    className="c-image__mask-container"
                    ref={imageMaskContainerRef}
                >
                    <GatsbyImage alt={alt} image={imageSrc} loading="eager" />
                </div>
            </div>
            <div ref={imageBackgroundRef} className="c-image__background"></div>
        </div>
    );
};

export default Image;
