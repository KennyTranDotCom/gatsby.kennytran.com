import React from 'react';

import Jumbotron from '../components/Jumbotron/Jumbotron';
import Section from '../components/Section/Section';
import Seo from '../components/Seo/Seo';

const Page404 = ({ data, mount, transitionStatus, ...props }) => {
    return (
        <>
            <Seo title="Not Found" />
            <Section>
                <div className="o-container">
                    <Jumbotron mount={mount} text="Page<br>Not Found" />
                </div>
            </Section>
            <Section>
                <div className="o-container">
                    <p>Sorry I couldn't find what you were looking for.</p>
                </div>
            </Section>
        </>
    );
};

export default Page404;
