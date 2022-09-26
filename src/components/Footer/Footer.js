import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { toast } from 'react-toastify';

import NavSocial from '../NavSocial/NavSocial';

import './Footer.scss';

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger);

const Footer = ({ mount }) => {
    const [state, handleSubmit] = useForm('xpzkwpwk', true);
    const footerRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({
            delay: 1.25,
            paused: true,
        });

        timeline.to(footerRef.current, {
            duration: 2,
            ease: CustomEase.create('cubic', '.19, 1, .22, 1'),
            opacity: '1',
            y: '0',
        });

        ScrollTrigger.matchMedia({
            '(min-width: 480px)': function () {
                gsap.set(footerRef.current, {
                    y: '100px',
                    opacity: 0,
                });

                timeline.play();
            },
        });
    }, []);

    if (!state.submitting) {
        if (state.succeeded) {
            toast('Message sent!');
            formRef.current.reset();
        }
    }

    return (
        <footer id="footer" className="c-footer" ref={footerRef}>
            <div className="o-container">
                <div className="c-footer__box">
                    <h2 className="[ u-text-2xl md:u-text-3xl lg:u-text-4xl ] [ u-mb-base md:u-mb-3xl ]">
                        Ready to start a project?
                    </h2>
                    <div className="[ c-footer__form ] [ u-mb-base md:u-mb-lg ]">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="o-grid">
                                <div className="[ o-row ] [ md:u-mb-lg ]">
                                    <div className="[ o-column md:o-column-5 ] [ u-mb-base md:u-mb-none ]">
                                        <label
                                            className="u-hidden-visually"
                                            htmlFor="contact-form-name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            id="contact-form-name"
                                            name="contact-form-name"
                                            placeholder="Name"
                                            required
                                            type="text"
                                        />
                                        <ValidationError
                                            errors={state.errors}
                                            field="contact-form-name"
                                            prefix="Name"
                                        />
                                    </div>
                                    <div className="[ o-column md:o-column-5 ] [ u-mb-lg md:u-mb-none ]">
                                        <label
                                            className="u-hidden-visually"
                                            htmlFor="contact-form-email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="contact-form-email"
                                            name="contact-form-email"
                                            placeholder="Email"
                                            required
                                            type="email"
                                        />
                                        <ValidationError
                                            errors={state.errors}
                                            field="email"
                                            prefix="Email"
                                        />
                                    </div>
                                </div>
                                <div className="o-row">
                                    <div className="[ o-column md:o-column-7 md:o-column-offset-5 ] [ o-stack ]">
                                        <label
                                            className="u-hidden-visually"
                                            htmlFor="contact-form-message"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="contact-form-message"
                                            name="contact-form-message"
                                            placeholder="Messsage"
                                            required
                                            rows="10"
                                        />
                                        <ValidationError
                                            errors={state.errors}
                                            field="message"
                                            prefix="Message"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                className="[ c-footer__form-button ] [ o-button ]"
                                disabled={state.submitting}
                                type="submit"
                            >
                                {state.submitting ? 'Sending' : 'Send'}
                            </button>
                        </form>
                    </div>
                    <hr className="[ c-divider ] [ u-mb-base md:u-mb-base ]" />
                    <div className="[ o-box ]">
                        <div className="o-row">
                            <div className="[ o-column md:o-column-5 ] [ u-mb-base md:u-mb-none ]">
                                <NavSocial />
                            </div>
                            <div className="[ o-column md:o-column-7 ] [ md:u-text-right ]">
                                <p className="u-text-sm">
                                    Copyright &copy; {new Date().getFullYear()}{' '}
                                    Kenny Tran Co Ltd. Registered in England and
                                    Wales.
                                    <br />
                                    Company number 12716945.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
