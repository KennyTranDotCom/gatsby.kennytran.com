import React from 'react';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import TransitionLink from 'gatsby-plugin-transition-link';

import Content from '../components/Content/Content';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Section from '../components/Section/Section';
import Seo from '../components/Seo/Seo';

const Posts = ({
    data,
    mount,
    pageContext: { nextPagePath, previousPagePath },
}) => {
    const posts = data.allWpPost.nodes;

    if (!posts.length) {
        return (
            <>
                <Seo title="Posts" />
                <Content>
                    <p>
                        No blog posts found. Add posts to your WordPress site
                        and they'll appear here!
                    </p>
                </Content>
            </>
        );
    }

    return (
        <>
            <Seo title="Posts" />
            <Section>
                <h1 className="u-hidden-visually">Posts</h1>
                <div className="o-container">
                    <Jumbotron mount={mount} text="<span>Posts</span>" />
                </div>
            </Section>
            <Content>
                <Section className="-padding-top-wide -padding-bottom-wide">
                    <div className="o-container">
                        <div className="o-row">
                            <div className="[ o-column ] [ o-stack--xl ]">
                                {posts.map((post, index) => {
                                    return (
                                        <article
                                            className={
                                                'o-article o-article--excerpt ' +
                                                (index % 2 ? '-alternate' : '')
                                            }
                                            key={post.uri}
                                        >
                                            <time className="o-article__date">
                                                {post.date}
                                            </time>
                                            <h2 className="o-article__title">
                                                {parse(post.title)}
                                            </h2>
                                            <TransitionLink
                                                className="o-article__button o-button"
                                                to={post.uri}
                                            >
                                                Read Post
                                            </TransitionLink>
                                        </article>
                                    );
                                })}

                                {previousPagePath && (
                                    <TransitionLink to={previousPagePath}>
                                        Previous page
                                    </TransitionLink>
                                )}

                                {nextPagePath && (
                                    <TransitionLink to={nextPagePath}>
                                        Next page
                                    </TransitionLink>
                                )}
                            </div>
                        </div>
                    </div>
                </Section>
            </Content>
        </>
    );
};

export default Posts;

export const pageQuery = graphql`
    query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
        allWpPost(
            sort: { fields: [date], order: DESC }
            limit: $postsPerPage
            skip: $offset
        ) {
            nodes {
                excerpt
                uri
                date(formatString: "MMMM DD, YYYY")
                title
                excerpt
                featuredImage {
                    node {
                        altText
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 1000, quality: 100) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
