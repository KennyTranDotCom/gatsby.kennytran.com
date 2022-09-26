import React from 'react';
import { graphql } from 'gatsby';
import { gsap } from 'gsap';
import TransitionLink from 'gatsby-plugin-transition-link';

import Content from '../components/Content/Content';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Projects from '../components/Projects/Projects';
import Section from '../components/Section/Section';
import Seo from '../components/Seo/Seo';
import Testimonials from '../components/Testimonials/Testimonials';

import ClientLogos from '../modules/ClientLogos/ClientLogos';

export const Head = () => <Seo title="About" />;

const PageAbout = ({ data, mount, transitionStatus, ...props }) => {
    const scrollToFooter = (event) => {
        gsap.to(window, { duration: 1, scrollTo: '#footer' });
    };

    return (
        <>
            <Section>
                <h1 className="u-hidden-visually">About</h1>
                <div className="o-container">
                    <Jumbotron mount={mount} text="<span>About</span>" />
                </div>
            </Section>

            <Content>
                <Section className="-padding-top-wide -padding-bottom-wide">
                    <div className="o-container o-container--narrow">
                        <div className="o-row">
                            <div className="[ o-column ] [ o-stack--xl ]">
                                <div className="[ o-box ] [ o-stack--md ]">
                                    <h2 className="[ u-mb-lg ] [ u-text-xl md:u-text-2xl md:u-text-center ]">
                                        Hello, I'm Kenny
                                    </h2>
                                    <p>
                                        I'm a web developer, business owner and
                                        mentor, specialising in the development
                                        of bespoke WordPress and React powered
                                        websites. For the past 11 years, I've
                                        been building digital solutions for
                                        major brands and design agencies. My
                                        background in web development and
                                        business puts me in a unique position to
                                        help your business decide on the right,
                                        sensible solutions for your digital
                                        products.
                                    </p>
                                    <p>
                                        My journey started back when I earned my
                                        Bachelor's Degree in Computer Science at
                                        Kingston University. Fresh from my
                                        undergrad, I set up my very first
                                        WordPress website and immediately
                                        developed a fondness for its ecosystem;
                                        ever since then, I've never looked back.
                                        I continued learning the trade in large
                                        London agencies, honing my technical and
                                        communications skills whilst working on
                                        projects for the likes of Google, eBay,
                                        McDonalds and AkzoNobel, to now, running
                                        my own business helping others build
                                        better digital experiences.
                                    </p>
                                </div>
                                <div className="[ o-box ] [ u-text-center ]">
                                    <TransitionLink
                                        className="[ o-button-pill o-button-pill--secondary ] [ u-mb-sm md:u-mr-sm md:u-mb-none ]"
                                        to="/working-with-me"
                                    >
                                        Find Out More
                                    </TransitionLink>
                                    <button
                                        className="o-button-pill"
                                        onClick={scrollToFooter}
                                    >
                                        Start a Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section>
                    <ClientLogos />
                </Section>

                <Section title="Latest work">
                    <h2 className="u-hidden-visually">Latest Work</h2>
                    <Projects
                        mount={mount}
                        projects={[
                            {
                                name: 'ShopTalk London',
                                image: data.imageShopTalkLondon,
                                role: 'WordPress Development',
                                url: 'https://shoptalklondon.com/',
                            },
                        ]}
                    />
                </Section>

                <Section>
                    <div className="o-container">
                        <h2 className="[ u-mb-lg ] [ u-text-xl md:u-text-2xl md:u-text-center ]">
                            Some Kind Words
                        </h2>
                        <Testimonials
                            testimonials={[
                                {
                                    quote: `<p>"Kenny is a pleasure to work with from beginning to end. He's punctual, always happy to help and although our brief was somewhat obscure, he nailed it first time."</p>`,
                                    name: 'Mike Kramer',
                                    company: 'Nous House',
                                },
                            ]}
                        />
                    </div>
                </Section>
            </Content>
        </>
    );
};

export default PageAbout;

export const projectListImages = graphql`
    fragment projectListImages on File {
        childImageSharp {
            gatsbyImageData(
                width: 700
                breakpoints: [576, 768, 992, 1200, 1400]
                placeholder: NONE
                quality: 100
            )
        }
    }
`;

export const pageQuery = graphql`
    query {
        imageShopTalkLondon: file(
            relativePath: { eq: "image-project-shoptalk-london.png" }
        ) {
            ...projectListImages
        }
    }
`;
