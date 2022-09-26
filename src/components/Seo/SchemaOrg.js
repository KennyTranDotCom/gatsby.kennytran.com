import React from 'react';

const SchemaOrg = ({
    author,
    article,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    title,
    url,
}) => {
    const baseSchema = [
        {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            url,
            name: title,
            alternateName: defaultTitle,
        },
        {
            '@context': 'http://schema.org',
            '@type': 'Person',
            name: author.name,
            image: `${canonicalUrl}${author.image}`,
            url: author.url,
            sameAs: [
                'https://github.com/KennyTranDotCom',
                'https://www.linkedin.com/in/kennytrandotcom/',
                'https://twitter.com/KennyTranDotCom',
            ],
        },
    ];

    const schema = article
        ? [
              ...baseSchema,
              {
                  '@context': 'http://schema.org',
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                      {
                          '@type': 'ListItem',
                          position: 1,
                          item: {
                              '@id': url,
                              name: title,
                              image,
                          },
                      },
                  ],
              },
              {
                  '@context': 'http://schema.org',
                  '@type': 'BlogPosting',
                  url,
                  name: title,
                  alternateName: defaultTitle,
                  headline: title,
                  image: {
                      '@type': 'ImageObject',
                      url: image,
                  },
                  description,
                  author: {
                      '@type': 'Person',
                      name: author.name,
                  },
                  mainEntityOfPage: {
                      '@type': 'WebSite',
                      '@id': canonicalUrl,
                  },
                  datePublished,
              },
          ]
        : baseSchema;

    return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};

export default SchemaOrg;
