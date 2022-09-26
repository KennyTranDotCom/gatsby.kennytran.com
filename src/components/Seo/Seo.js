import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

import SchemaOrg from './SchemaOrg';

const Seo = ({ article, date, description, home, image, title }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const {
        author,
        defaultDescription,
        defaultImage,
        defaultTitle,
        siteUrl,
        social,
    } = site.siteMetadata;

    const seo = {
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        title: title || defaultTitle,
        url: `${siteUrl}${pathname}`,
    };

    return (
        <>
            <title>
                {home
                    ? `${defaultTitle} • ${seo.title}`
                    : `${seo.title} • ${defaultTitle}`}
            </title>

            <meta name="description" content={seo.description} />

            <meta name="image" content={seo.image} />

            {seo.url && <meta property="og:url" content={seo.url} />}

            {article ? (
                <meta property="og:type" content="article" />
            ) : (
                <meta property="og:type" content="website" />
            )}

            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}

            {seo.image && <meta property="og:image" content={seo.image} />}

            {seo.title && <meta property="og:title" content={seo.title} />}

            <meta name="twitter:card" content="summary_large_image" />

            {social.twitter && (
                <meta name="twitter:creator" content={social.twitter} />
            )}

            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}

            {seo.image && <meta name="twitter:image" content={seo.image} />}

            {seo.title && <meta name="twitter:title" content={seo.title} />}

            <SchemaOrg
                article={article}
                author={author}
                datePublished={date}
                canonicalUrl={siteUrl}
                defaultTitle={seo.title}
                description={seo.description}
                image={seo.image}
                title={seo.title}
                url={seo.url}
            />
        </>
    );
};

Seo.defaultProps = {
    article: false,
    description: null,
    image: null,
    lang: `en-GB`,
    title: null,
};

Seo.propTypes = {
    article: PropTypes.bool,
    description: PropTypes.string,
    image: PropTypes.string,
    lang: PropTypes.string,
    title: PropTypes.string,
};

export default Seo;

const query = graphql`
    query Seo {
        site {
            siteMetadata {
                author {
                    name
                    image
                    url
                }
                defaultDescription: description
                defaultImage: image
                defaultTitle: title
                siteUrl
                social {
                    twitter
                }
            }
        }
    }
`;
