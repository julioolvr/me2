import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

function Blog({ data }) {
  const posts = data.posts.group
    .map(group => group.edges)
    .sort((a, b) => {
      if (a[0].node.frontmatter.date > b[0].node.frontmatter.date) {
        return -1;
      }

      return 1;
    });

  return (
    <Layout>
      <ol>
        {posts.map(postGroup => (
          <li>
            {postGroup[0].node.frontmatter.date}
            {postGroup[0].node.frontmatter.title}
          </li>
        ))}
      </ol>
    </Layout>
  );
}

Blog.propTypes = {
  data: PropTypes.shape({ posts: PropTypes.object }).isRequired,
};

export default Blog;

export const query = graphql`
  query {
    posts: allMarkdownRemark {
      group(field: frontmatter___key) {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  }
`;
