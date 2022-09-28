import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import TransitionLink from 'gatsby-plugin-transition-link';

import Content from '../components/Content/Content';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Image from '../components/Image/Image';
import NavSocial from '../components/NavSocial/NavSocial';
import Projects from '../components/Projects/Projects';
import Section from '../components/Section/Section';
import Seo from '../components/Seo/Seo';
import Testimonials from '../components/Testimonials/Testimonials';
import TwoColumn from '../components/TwoColumn/TwoColumn';

import ClientLogos from '../modules/ClientLogos/ClientLogos';

export const Head = () => (
    <Seo home={true} title="Freelance Web Developer based in London, UK" />
);

const PageHome = ({ data, mount, transitionStatus, ...props }) => {
    const image = getImage(data.imageKennyTran);

    const scrollToFooter = (event) => {
        gsap.to(window, { duration: 1, scrollTo: '#footer' });
    };

    return (
        <>
            <Section>
                <div className="o-container">
                    <h1 className="u-hidden-visually">
                        Website of Kenny Tran, Freelance Web Developer
                    </h1>
                    <Jumbotron
                        mount={mount}
                        text="<span>Freelance</span><br><span>Web Developer</span>"
                    />
                </div>
            </Section>

            <Content>
                <Section className="-padding-top-wide -padding-bottom-wide">
                    <h2 className="u-hidden-visually">Introduction</h2>
                    <div className="o-container o-container--narrow">
                        <div className="o-row">
                            <div className="o-column">
                                <div className="o-box u-text-center">
                                    <p className="u-mb-md u-text-formula u-text-uppercase u-text-lg md:u-text-xl u-text-leading-none">
                                        I specialise in the development of
                                        bespoke WordPress and React powered
                                        websites
                                    </p>
                                    <TransitionLink
                                        className="[ o-button-pill o-button-pill--secondary ] [ u-mb-sm md:u-mr-sm md:u-mb-none ]"
                                        to="/about"
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

                <Section className="-padding-top-wide -padding-bottom-wide">
                    <ClientLogos />
                </Section>

                <Section
                    className="-padding-bottom-wide"
                    label="About Me"
                    labelPosition="left"
                >
                    <h2 className="u-hidden-visually">About</h2>
                    <div className="o-container o-container">
                        <div className="o-row">
                            <div className="[ o-column md:o-column-4 ] [ u-mb-base lg:u-mb-none ] [ u-d-flex ] [ u-items-center ]">
                                <Image
                                    alt="Kenny Tran"
                                    className="u-mx-auto"
                                    image={image}
                                    mount={mount}
                                />
                            </div>
                            <div className="[ o-column md:o-column-5 ] [ u-mb-base lg:u-mb-none ]">
                                <div className="[ o-box ] [ o-stack ]">
                                    <h3 className="u-text-md u-text-leading-none">
                                        Profile
                                    </h3>
                                    <p>
                                        I'm Kenny, a web developer, business
                                        owner and mentor with over 11 years of
                                        professional experience, working with
                                        businesses around the world from my home
                                        in Kent, UK.
                                    </p>
                                    <p>
                                        I collaborate with design agencies and
                                        brands to develop and launch beautiful,
                                        intuitive digital products that help
                                        solve some of the most interesting
                                        challenges for businesses of all sizes.
                                    </p>
                                </div>
                            </div>
                            <div className="[ o-column md:o-column-3 ] [ u-mb-base lg:u-mb-none ]">
                                <ul className="o-list-bare">
                                    <li className="[ o-stack ] [ u-mb-lg ]">
                                        <h3 className="u-text-md u-text-leading-none">
                                            Email
                                        </h3>
                                        <a href="mailto:kenny@kennytran.com">
                                            kenny@kennytran.com
                                        </a>
                                    </li>
                                    <li className="o-stack">
                                        <h3 className="u-text-md u-text-leading-none">
                                            Follow
                                        </h3>
                                        <NavSocial />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section className="-padding-top-wide -padding-bottom-wide">
                    <div className="o-container o-container--narrow">
                        <div className="o-row">
                            <div className="[ o-column ]">
                                <div className="[ o-box ] [ o-stack--md ]">
                                    <h2 className="u-text-xl md:u-text-2xl md:u-text-center">
                                        Do You Need A Web Developer?
                                    </h2>

                                    <div className="o-row">
                                        <div className="[ o-column ]">
                                            <p>
                                                When it comes to web
                                                development, it's never a one
                                                size fits all approach. The
                                                clients I've worked with have
                                                required web builds for
                                                different reasons. Some of the
                                                most common reasons are:
                                            </p>
                                        </div>
                                    </div>
                                    <div className="o-row">
                                        <div className="[ o-column ]">
                                            <div className="o-stack--lg">
                                                <ul className="o-stack--sm">
                                                    <li>
                                                        <p>
                                                            <strong>
                                                                Design Agencies
                                                                and Freelance
                                                                Designers
                                                            </strong>
                                                        </p>
                                                        <p>
                                                            "We need an
                                                            experienced web
                                                            developer to work
                                                            alongside our
                                                            designers to plan
                                                            the best approach
                                                            for our project and
                                                            build the finished
                                                            design, UX and UI
                                                            work."
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <strong>
                                                                Brands
                                                            </strong>
                                                        </p>
                                                        <p>
                                                            "We need a website
                                                            audit and to
                                                            optimise the speed
                                                            and SEO of our
                                                            website and stop
                                                            search engines from
                                                            penalising us."
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <strong>
                                                                Web Development
                                                                Agencies and
                                                                Freelance
                                                                Developers
                                                            </strong>
                                                        </p>
                                                        <p>
                                                            ”We need a second
                                                            pair of fingers to
                                                            help tackle our
                                                            workload.”
                                                        </p>
                                                    </li>
                                                </ul>
                                                <p>
                                                    If you're experiencing a
                                                    similar scenario, speak with
                                                    me today for a consultation.
                                                </p>
                                                <div className="[ o-box ] [ u-text-center ]">
                                                    <TransitionLink
                                                        className="[ o-button-pill o-button-pill--secondary ]  [ u-mb-sm md:u-mr-sm md:u-mb-none ]"
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
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section label="Latest work">
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

                <Section className="-padding-top-wide -padding-bottom-wide">
                    <div className="o-container o-container--narrow">
                        <div className="o-row">
                            <div className="[ o-column ]">
                                <div className="[ o-box ] [ o-stack--md ]">
                                    <h2 className="u-text-xl md:u-text-2xl md:u-text-center">
                                        Why Hire Me?
                                    </h2>

                                    <div className="o-row">
                                        <div className="[ o-column ]">
                                            <p>
                                                My reputation with big brands
                                                and design agencies has allowed
                                                me to build products that help
                                                solve some of the most exciting
                                                challenges for businesses time
                                                and again. If you need:
                                            </p>
                                        </div>
                                    </div>
                                    <div className="o-row">
                                        <div className="[ o-column ]">
                                            <div className="o-stack--lg">
                                                <ul className="o-stack--sm">
                                                    <li>
                                                        A reliable web developer
                                                        with over 11 years of
                                                        experience working in
                                                        large London agencies
                                                        and as a freelancer
                                                    </li>
                                                    <li>
                                                        Bespoke builds that
                                                        cater to your design and
                                                        needs without using an
                                                        off-the-shelf solution
                                                    </li>
                                                    <li>
                                                        A web developer who is
                                                        on top of the latest
                                                        trends and standards in
                                                        web development and
                                                        design
                                                    </li>
                                                    <li>
                                                        A competent communicator
                                                        that you contact
                                                        directly, never leaving
                                                        you misunderstood
                                                    </li>
                                                    <li>
                                                        Peace of mind, a 30-day
                                                        guarantee and a fixed
                                                        price quote, so you know
                                                        exactly how much you're
                                                        paying for your website
                                                    </li>
                                                </ul>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section className="-padding-top-wide -padding-bottom-wide">
                    <div className="o-container">
                        <h2 className="[ u-mb-lg ] [ u-text-xl md:u-text-2xl md:u-text-center ]">
                            Tech Stack
                        </h2>
                    </div>
                    <TwoColumn
                        column1={
                            <>
                                <h3 className="u-text-sm u-mb-base u-c-grey">
                                    Languages
                                </h3>
                                <ul className="o-list-bare u-mb-lg">
                                    <li className="h2 u-text-xl u-text-leading-base md:u-text-2xl">
                                        HTML
                                    </li>
                                    <li className="h2 u-text-xl u-text-leading-base md:u-text-2xl">
                                        CSS / Sass
                                    </li>
                                    <li className="h2 u-text-xl u-text-leading-base md:u-text-2xl">
                                        JavaScript / ES6
                                    </li>
                                    <li className="h2 u-text-xl u-text-leading-base md:u-text-2xl">
                                        PHP
                                    </li>
                                </ul>
                                <h3 className="[ u-mb-base ] [ u-c-grey ] [ u-text-sm u-text-right md:u-text-left ]">
                                    Frameworks
                                </h3>
                                <ul className="[ o-list-bare ] [ u-text-right md:u-text-left ]">
                                    <li className="h2 u-text-xl u-text-leading-base md:u-text-2xl">
                                        React
                                    </li>
                                    <li className="h2 u-text-xl u-text-leading-base md:u-text-2xl">
                                        Tailwind CSS
                                    </li>
                                </ul>
                            </>
                        }
                        column2={
                            <>
                                <h3 className="u-text-sm u-mb-base u-c-grey">
                                    Platforms
                                </h3>
                                <ul className="o-list-bare u-mb-lg">
                                    <li className="h2 u-text-xl u-text-leading-base md:u-text-2xl">
                                        WordPress
                                    </li>
                                    <li className="h2 u-text-xl u-text-leading-base md:u-text-2xl">
                                        Gatsby
                                    </li>
                                    <li className="h2 u-text-xl u-text-leading-base md:u-text-2xl">
                                        Eleventy
                                    </li>
                                </ul>
                                <h3 className="[ u-mb-base ] [ u-c-grey ] [ u-text-sm u-text-right md:u-text-left ]">
                                    eCommerce
                                </h3>
                                <ul className="[ o-list-bare ] [ u-text-right md:u-text-left ]">
                                    <li className="h2 u-text-xl u-text-leading-base md:u-text-2xl">
                                        WooCommerce
                                    </li>
                                    <li className="h2 u-text-xl u-text-leading-base md:u-text-2xl">
                                        Shopify
                                    </li>
                                </ul>
                            </>
                        }
                    />
                </Section>

                <Section label="Latest work">
                    <h2 className="u-hidden-visually">Latest Work</h2>
                    <Projects
                        mount={mount}
                        projects={[
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
                                {
                                    quote: `<p>"Kenny was knowledgeable, professional and polite.</p>
                                            <p>He kept us updated throughout&nbsp;theprocess, made amendments when requestedand we were highly satisfied with ourfinished website.</p>
                                            <p>We would highly recommend Kenny to anyone who is looking to hire a web developer."</p>`,
                                    name: 'Claire Robinson',
                                    company: 'Mable Therapy',
                                },
                            ]}
                        />
                    </div>
                </Section>
            </Content>
        </>
    );
};

export default PageHome;

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

        imageKennyTran: file(relativePath: { eq: "image-kenny-tran.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 100, width: 300)
            }
        }
    }
`;
