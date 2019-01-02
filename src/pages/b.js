import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import { postPath } from '../utils/blog';
import Layout from '../components/layout';
import './b.css';

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
    <Layout centered>
      <ol className="posts-list">
        {posts.map(postGroup => (
          <li key={postGroup[0].node.frontmatter.path}>
            <time>{postGroup[0].node.frontmatter.date}</time>

            <Link
              to={postPath(postGroup[0].node.frontmatter.path, postGroup[0].node.frontmatter.lang)}
            >
              {postGroup[0].node.frontmatter.title}
            </Link>
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
              lang
              path
            }
          }
        }
      }
    }
  }
`;
