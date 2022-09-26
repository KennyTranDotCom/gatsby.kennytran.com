import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Ticker from '../../components/Ticker/Ticker';

const ClientLogos = () => {
    return (
        <StaticQuery
            query={graphql`
                query FooterQuery {
                    allClientLogosJson {
                        edges {
                            node {
                                name
                                url
                                icon {
                                    publicURL
                                }
                            }
                        }
                    }
                }
            `}
            render={(data) => (
                <>
                    <h2 className="[ u-text-base u-text-center ] u-mb-md">
                        Trusted By
                    </h2>
                    <Ticker data={data.allClientLogosJson} />
                </>
            )}
        />
    );
};

export default ClientLogos;
