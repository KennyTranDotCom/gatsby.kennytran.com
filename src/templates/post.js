import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';
//import Prism from 'prismjs';

import Content from '../components/Content/Content';
import Section from '../components/Section/Section';
import Seo from '../components/Seo/Seo';

const Post = ({ data: { post, previous, next }, mount }) => {
    let featuredImage = {};

    if (post?.featuredImage != null) {
        featuredImage = {
            image: getImage(post.featuredImage.node.localFile),
            alt: post.featuredImage?.node?.alt || ``,
        };
    }

    useEffect(() => {
        //Prism.highlightAll();
    });

    return (
        <>
            <Seo title={post.title} description={post.excerpt} />
            <Content>
                <article className="o-article">
                    <Section className="-padding-top-wide -padding-bottom-wide">
                        <div className="o-container [ u-mb-base md:u-mb-lg lg:u-mb-xl ]">
                            <div className="o-row">
                                <div className="[ o-column ]">
                                    {featuredImage?.image && (
                                        <GatsbyImage
                                            alt={featuredImage.alt}
                                            image={featuredImage.image}
                                            sx={{ marginBottom: 50 }}
                                        />
                                    )}
                                    <time className="o-article__date">
                                        {post.date}
                                    </time>
                                    <h1 className="o-article__title">
                                        {parse(post.title)}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="o-container o-container--narrow">
                            <div className="o-row">
                                <div className="[ o-column ] [ o-stack--md ]">
                                    {parse(post.content)}
                                </div>
                            </div>
                        </div>
                    </Section>
                </article>
            </Content>
        </>
    );
};

export default Post;

export const pageQuery = graphql`
    query ($id: String!, $previousPostId: String, $nextPostId: String) {
        post: wpPost(id: { eq: $id }) {
            id
            excerpt
            content
            title
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
                node {
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                width: 1000
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
            }
        }
        previous: wpPost(id: { eq: $previousPostId }) {
            uri
            title
        }
        next: wpPost(id: { eq: $nextPostId }) {
            uri
            title
        }
    }
`;
