import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

import './Cursor.scss';

// Register GSAP plugins
gsap.registerPlugin(CustomEase);

const Cursor = ({ path }) => {
    const cursorPointerRef = useRef(null);
    const cursorFollowRef = useRef(null);

    useEffect(() => {
        function setFromEvent(event) {
            gsap.to(cursorPointerRef.current, 0.1, {
                x: event.clientX,
                y: event.clientY,
            });

            gsap.to(cursorFollowRef.current, 0.3, {
                x: event.clientX,
                y: event.clientY,
            });
        }

        var hoverItems = document.querySelectorAll(
            'a, button, [role="button"]'
        );

        hoverItems.forEach(function (anchor) {
            anchor.addEventListener('mouseover', function hover(event) {
                gsap.to(cursorPointerRef.current, 0.75, {
                    ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                    scale: '0',
                });

                if (
                    anchor.classList.contains('o-button') ||
                    anchor.classList.contains('o-button-pill')
                ) {
                    gsap.to(cursorFollowRef.current, 0.75, {
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        scale: 0,
                    });
                } else {
                    gsap.to(cursorFollowRef.current, 0.75, {
                        ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
                        scale: 2.5,
                    });
                }
            });

            anchor.addEventListener('mouseleave', function leave() {
                gsap.to(cursorPointerRef.current, 0.75, {
                    scale: 1,
                });

                gsap.to(cursorFollowRef.current, 0.75, {
                    scale: 1,
                });
            });
        });

        window.addEventListener('mousemove', setFromEvent);

        return () => {
            window.removeEventListener('mousemove', setFromEvent);
        };
    }, [path]);

    return (
        <>
            <div className="c-cursor">
                <div className="c-cursor__pointer" ref={cursorPointerRef}></div>
                <div className="c-cursor__follow" ref={cursorFollowRef}></div>
            </div>
        </>
    );
};

export default Cursor;
