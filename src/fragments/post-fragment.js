import { graphql } from 'gatsby';

// Gatsby (apparenty) needs this to be exported as the named export `query`
// for its static query extraction process.
/* eslint-disable import/prefer-default-export */
export const query = graphql`
  fragment OtherPostsFragment on Query {
    posts: allSitePage(filter: { context: { key: { eq: $key } } }) {
      edges {
        node {
          path
          context {
            key
            lang
          }
        }
      }
    }
  }
`;
