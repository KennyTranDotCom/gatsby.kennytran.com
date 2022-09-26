import React from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Section.scss';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger);

const Section = ({ className, children, label, labelPosition }) => {
    return (
        <section className={'c-section' + (className ? ' ' + className : '')}>
            <div className="c-section__inner">
                <div className="o-container u-d-flex">
                    {label ? (
                        <div
                            className={
                                'c-section__label' +
                                (labelPosition ? ' -' + labelPosition : '')
                            }
                            data-nosnippet
                        >
                            <i>
                                <svg width="17" height="9">
                                    <path d="M16.278.299L8.5 8.077.722.3"></path>
                                </svg>
                            </i>
                            <span>{label}</span>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                {children}
            </div>
        </section>
    );
};

export default Section;
