import React from 'react';
import { graphql } from 'gatsby';
import { gsap } from 'gsap';

import Content from '../components/Content/Content';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Projects from '../components/Projects/Projects';
import Section from '../components/Section/Section';
import Seo from '../components/Seo/Seo';
import Testimonials from '../components/Testimonials/Testimonials';

import ClientLogos from '../modules/ClientLogos/ClientLogos';

export const Head = () => <Seo title="Working With Me" />;

const PageWorkingWithMe = ({ data, mount, transitionStatus, ...props }) => {
    const scrollToFooter = (event) => {
        gsap.to(window, { duration: 1, scrollTo: '#footer' });
    };

    return (
        <>
            <Section>
                <h1 className="u-hidden-visually">Working With Me</h1>
                <div className="o-container">
                    <Jumbotron
                        mount={mount}
                        text="<span>Working</span><br/><span>With Me</span>"
                    />
                </div>
            </Section>

            <Content>
                <Section className="-padding-top-wide -padding-bottom-wide">
                    <h2 className="u-hidden-visually">
                        Freelance Web Developer
                    </h2>
                    <div className="o-container o-container--narrow">
                        <div className="o-row">
                            <div className="[ o-column ]">
                                <div className="[ o-box ] [ o-stack--2xl ]">
                                    <section className="[ o-stack--md ]">
                                        <p>
                                            When working with me, I'll treat
                                            your project as my personal goal to
                                            succeed. If you've worked with
                                            agencies before, you can forget
                                            about all your expectations. Working
                                            with me is nothing like that; You'll
                                            get direct access to me, and I am
                                            the only contact point you'll ever
                                            have.
                                        </p>
                                    </section>
                                    <section className="[ o-stack--md ]">
                                        <h3 className="[ u-mb-lg ] [ u-text-xl md:u-text-2xl md:u-text-center ]">
                                            Approach
                                        </h3>
                                        <p>
                                            When working on your project, I
                                            understand that your needs are
                                            specific, and I tailor my time,
                                            knowledge and expertise to make your
                                            digital product excel. Here's my
                                            approach to web development:
                                        </p>
                                        <ul className="o-stack">
                                            <li>
                                                Listening to you about your
                                                business requirements and your
                                                target audience. Based on this
                                                knowledge, I build detailed
                                                project specifications, so you
                                                get exactly what you need.
                                            </li>
                                            <li>
                                                Through a deep understanding of
                                                the fundamentals of how
                                                WordPress works. My builds
                                                follow the “WordPress Way” and
                                                help fix the problems others
                                                can't.
                                            </li>
                                            <li>
                                                Investing in the future and
                                                making your site robust and
                                                extensible.
                                            </li>
                                            <li>
                                                Building long-term enriching
                                                partnerships with each client. I
                                                can be part of your outsourced
                                                web team and help you find other
                                                developers.
                                            </li>
                                            <li>
                                                Building custom WordPress themes
                                                to compliment your vision and
                                                match your designs and
                                                functionality without any
                                                headaches.
                                            </li>
                                            <li>
                                                Developing custom plugins to
                                                handle custom functionality and
                                                integrations.
                                            </li>
                                            <li>
                                                Customising the WordPress admin
                                                to make adding and editing
                                                content easy
                                            </li>
                                            <li>
                                                Leveraging the best 3rd-party
                                                plugins to save development time
                                                and costs is the right thing to
                                                do.
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section>
                    <ClientLogos />
                </Section>

                <Section className="-padding-top-wide -padding-bottom-wide">
                    <div className="o-container o-container--narrow">
                        <div className="o-row">
                            <div className="[ o-column ]">
                                <div className="[ o-box ] [ o-stack--2xl ]">
                                    <section className="[ o-stack--md ]">
                                        <h3 className="[ u-mb-lg ] [ u-text-xl md:u-text-2xl md:u-text-center ]">
                                            Process
                                        </h3>
                                        <p>
                                            Here's the process you can expect
                                            when working with me:
                                        </p>
                                        <div className="o-row">
                                            <div className="[ o-column md:o-column-4 ] [ u-mb-sm md:u-mb-none ]">
                                                <h4 className="u-text-md">
                                                    1. Discovery
                                                </h4>
                                            </div>
                                            <div className="[ o-column md:o-column-8 ]">
                                                <div className="o-stack--xs">
                                                    <p>
                                                        I'll start by
                                                        familiarising myself
                                                        with your project
                                                        through an in-depth
                                                        discussion with you and
                                                        the Lead Designer,
                                                        extracting all the
                                                        relevant questions
                                                    </p>
                                                    <p>
                                                        This will include a
                                                        review of the UI visuals
                                                        and functional
                                                        requirements
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="o-row">
                                            <div className="[ o-column md:o-column-4 ] [ u-mb-sm md:u-mb-none ]">
                                                <h4 className="u-text-md">
                                                    2: Plan
                                                </h4>
                                            </div>
                                            <div className="[ o-column md:o-column-8 ]">
                                                <div className="o-stack">
                                                    <p>
                                                        I'll make suggestions to
                                                        you on the best
                                                        technology to use for
                                                        your project
                                                    </p>
                                                    <p>
                                                        And provide any
                                                        recommendations to
                                                        enhance the potential of
                                                        your project
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="o-row">
                                            <div className="[ o-column md:o-column-4 ] [ u-mb-sm md:u-mb-none ]">
                                                <h4 className="u-text-md">
                                                    3: Quote
                                                </h4>
                                            </div>
                                            <div className="[ o-column md:o-column-8 ]">
                                                <div className="o-stack">
                                                    <p>
                                                        As soon as a plan is
                                                        agreed upon between you,
                                                        me, and the team, I will
                                                        provide you with:
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            A timescale for the
                                                            scope of work to be
                                                            done
                                                        </li>
                                                        <li>
                                                            A flat-rate cost for
                                                            the build
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="o-row">
                                            <div className="[ o-column md:o-column-4 ] [ u-mb-sm md:u-mb-none ]">
                                                <h4 className="u-text-md">
                                                    4: Build
                                                </h4>
                                            </div>
                                            <div className="[ o-column md:o-column-8 ]">
                                                <div className="o-stack">
                                                    <p>
                                                        I'll start by recreating
                                                        the UI visuals and
                                                        building out the
                                                        functional
                                                        specifications that make
                                                        up your digital product
                                                    </p>
                                                    <p>
                                                        I'll test my own source
                                                        code both in the browser
                                                        and at a unit level too
                                                        (if applicable)
                                                    </p>
                                                    <p>
                                                        I'll ensure your website
                                                        or app is optimised, has
                                                        valid markup, is
                                                        accessible, extensible,
                                                        and SEO friendly
                                                    </p>
                                                    <p>
                                                        I'll keep you informed
                                                        of progress during the
                                                        build through a shared
                                                        Trello board so you
                                                        won't be left in the
                                                        dark
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="o-row">
                                            <div className="[ o-column md:o-column-4 ] [ u-mb-sm md:u-mb-none ]">
                                                <h4 className="u-text-md">
                                                    5: Support
                                                </h4>
                                            </div>
                                            <div className="[ o-column md:o-column-8 ]">
                                                <div className="o-stack">
                                                    <p>
                                                        Upon sign-off and
                                                        delivery, I'll provide
                                                        free 30-day technical
                                                        support in the event of
                                                        any issues that arise
                                                        within your project's
                                                        scope
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section>
                                        <div className="[ o-box ] [ u-text-center ]">
                                            <button
                                                className="o-button-pill"
                                                onClick={scrollToFooter}
                                            >
                                                Start a Project
                                            </button>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section title="My latest work">
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

export default PageWorkingWithMe;

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
