import React from 'react';
import { graphql } from 'gatsby';

import Content from '../components/Content/Content';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Projects from '../components/Projects/Projects';
import Section from '../components/Section/Section';
import Seo from '../components/Seo/Seo';
import Testimonials from '../components/Testimonials/Testimonials';

export const Head = () => <Seo title="Work" />;

const PageWork = ({ data, mount, transitionStatus, ...props }) => {
    return (
        <>
            <Section>
                <h1 className="u-hidden-visually">Work</h1>
                <div className="o-container">
                    <Jumbotron mount={mount} text="<span>Work</span>" />
                </div>
            </Section>

            <Content>
                <Section className="-padding-top-wide" title="Latest work">
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
                            {
                                name: 'Entropy',
                                image: data.imageEntropy,
                                role: 'WordPress Development',
                                url: 'https://entropy.works/',
                            },
                            {
                                name: '58 Gin',
                                image: data.image58Gin,
                                role: 'WordPress Development',
                                url: 'https://58gin.com/',
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

export default PageWork;

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
        image58Gin: file(relativePath: { eq: "image-project-58-gin.png" }) {
            ...projectListImages
        }

        imageShopTalkLondon: file(
            relativePath: { eq: "image-project-shoptalk-london.png" }
        ) {
            ...projectListImages
        }

        imageEntropy: file(relativePath: { eq: "image-project-entropy.png" }) {
            ...projectListImages
        }
    }
`;
