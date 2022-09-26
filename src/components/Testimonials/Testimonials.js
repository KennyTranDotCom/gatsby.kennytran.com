import React from 'react';

import Divider from '../Divider/Divider';

import './Testimonials.scss';

const Testimonials = ({ testimonials }) => {
    return (
        <ul className="c-testimonials">
            {testimonials.map((testimonial, index, row) => (
                <li key={index}>
                    <blockquote>
                        <div className="c-testimonials__quote">
                            <div
                                className="o-stack"
                                dangerouslySetInnerHTML={{
                                    __html: testimonial.quote,
                                }}
                            ></div>
                        </div>
                        <footer className="c-testimonials__cite">
                            - {testimonial.name},{' '}
                            <cite>{testimonial.company}</cite>
                        </footer>
                    </blockquote>
                    {!index + 1 === row.length ? <Divider size="small" /> : ''}
                </li>
            ))}
        </ul>
    );
};

export default Testimonials;
