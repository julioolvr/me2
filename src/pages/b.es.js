import { graphql } from 'gatsby';

import Blog from './b';

export default Blog;

// TODO: This query is duplicated in b.js, and this whole file feels
// like a hack
export const query = graphql`
  query {
    posts: allSitePage(
      filter: { path: { regex: "/^(?:/\\w\\w)?/b/\\d/" } }
      sort: { order: DESC, fields: context___date }
    ) {
      edges {
        node {
          path
          context {
            key
            langKey
            date
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`;
