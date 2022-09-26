const path = require(`path`);
const chunk = require(`lodash/chunk`);

exports.createPages = async (gatsbyUtilities) => {
    // Query posts from the GraphQL server
    const posts = await getPosts(gatsbyUtilities);

    // If there are no posts in WordPress, don't do anything
    if (!posts.length) {
        return;
    }

    // If there are posts, create pages for them
    await createPost({ posts, gatsbyUtilities });

    // And a paginated archive
    await createPosts({ posts, gatsbyUtilities });
};

// Create individual post pages
const createPost = async ({ posts, gatsbyUtilities }) =>
    Promise.all(
        posts.map(({ previous, post, next }) =>
            gatsbyUtilities.actions.createPage({
                // Use the WordPress uri as the Gatsby page path, so that internal links and menus work
                path: post.uri,

                // Use the post template as the page component
                component: path.resolve(`./src/templates/post.js`),

                // `context` is available in the template as a prop and as a variable in GraphQL
                context: {
                    id: post.id,
                    previousPostId: previous ? previous.id : null,
                    nextPostId: next ? next.id : null,
                },
            })
        )
    );

// Creates post archive pages
async function createPosts({ posts, gatsbyUtilities }) {
    const graphqlResult = await gatsbyUtilities.graphql(`
        {
            wp {
                readingSettings {
                    postsPerPage
                }
            }
        }
    `);

    const { postsPerPage } = graphqlResult.data.wp.readingSettings;
    const postsPages = chunk(posts, postsPerPage);
    const totalPages = postsPages.length;

    return Promise.all(
        postsPages.map(async (_posts, index) => {
            const pageNumber = index + 1;

            const getPagePath = (page) => {
                if (page > 0 && page <= totalPages) {
                    return page === 1 ? `/posts/` : `/posts/${page}`;
                }

                return null;
            };

            await gatsbyUtilities.actions.createPage({
                path: getPagePath(pageNumber),
                component: path.resolve(`./src/templates/posts.js`),
                context: {
                    offset: index * postsPerPage,
                    postsPerPage,
                    nextPagePath: getPagePath(pageNumber + 1),
                    previousPagePath: getPagePath(pageNumber - 1),
                },
            });
        })
    );
}

// Query Gatsby's GraphQL server and asks for all WordPress blog posts
async function getPosts({ graphql, reporter }) {
    const graphqlResult = await graphql(`
        query WpPosts {
            allWpPost(sort: { fields: [date], order: DESC }) {
                edges {
                    previous {
                        id
                    }
                    # note: this is a GraphQL alias. It renames "node" to "post" for this query
                    post: node {
                        id
                        uri
                    }
                    next {
                        id
                    }
                }
            }
        }
    `);

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            graphqlResult.errors
        );

        return;
    }

    return graphqlResult.data.allWpPost.edges;
}
