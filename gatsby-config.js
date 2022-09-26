const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
    path: `.env.${activeEnv}`,
});

module.exports = {
    siteMetadata: {
        author: {
            name: 'Kenny Tran',
            image: '/meta-kenny-tran.jpg',
            url: 'https://kennytran.com',
        },
        description:
            'Freelance Web Developer based in Kent, UK. Specialising in HTML, CSS, JavaScript, React, Gatsby, WordPress, WooCommerce and Shopify development',
        image: '/meta.png',
        siteUrl: process.env.SITE_URL,
        social: {
            twitter: '@KennyTranDotCom',
        },
        title: 'Kenny Tran',
    },

    plugins: [
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                url: process.env.WORDPRESS_URL + `/graphql`,
            },
        },

        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                    }
                  }
                }
              `,
                feeds: [
                    {
                        serialize: ({ query: { site, allWpPost } }) => {
                            return allWpPost.edges.map((edge) => {
                                return Object.assign({}, edge.node, {
                                    description: edge.node.excerpt,
                                    date: edge.node.date,
                                    url:
                                        site.siteMetadata.siteUrl +
                                        edge.node.slug,
                                    guid:
                                        site.siteMetadata.siteUrl +
                                        edge.node.slug,
                                    custom_elements: [
                                        {
                                            'content:encoded':
                                                edge.node.content,
                                        },
                                    ],
                                });
                            });
                        },
                        query: `
                        {
                            allWpPost(sort: {order: DESC, fields: date}) {
                                edges {
                                    node {
                                        date
                                        title
                                        content
                                        excerpt
                                        slug
                                    }
                                }
                            }
                        }
                        `,
                        output: '/rss.xml',
                        title: `RSS Feed`,
                    },
                ],
            },
        },

        {
            resolve: `gatsby-plugin-goatcounter`,
            options: {
                code: process.env.GOATCOUNTER_CODE,
            },
        },

        `gatsby-plugin-image`,

        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Kenny Tran',
                background_color: '#15151B',
                display: 'minimal-ui',
                icon: 'static/favicon.png',
                short_name: 'Kenny Tran',
                start_url: '/',
                theme_color: '#080808',
            },
        },

        `gatsby-plugin-preload-fonts`,

        `gatsby-plugin-gatsby-cloud`,

        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /images/,
                },
            },
        },

        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: process.env.SITE_URL,
                sitemap: process.env.SITE_URL + '/sitemap/sitemap-index.xml',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },

        `gatsby-plugin-sass`,

        `gatsby-plugin-sharp`,

        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                query: `
                {
                    site {
                        siteMetadata {
                            siteUrl
                        }
                    }

                    allSitePage {
                        nodes {
                            path
                        }
                    }
                }`,
                resolveSiteUrl: ({ site }) => site.siteMetadata.siteUrl,
                resolvePages: ({ allSitePage: { nodes: allPages } }) => {
                    return allPages.map((page) => {
                        return { ...page };
                    });
                },
                serialize: ({ path, modifiedGmt }) => {
                    return {
                        url: path,
                        lastmod: modifiedGmt,
                    };
                },
            },
        },

        {
            resolve: 'gatsby-plugin-transition-link',
            options: {
                layout: require.resolve('./src/components/Layout/Layout.js'),
            },
        },

        `gatsby-transformer-json`,

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
            },
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },

        `gatsby-transformer-sharp`,
    ],
};
