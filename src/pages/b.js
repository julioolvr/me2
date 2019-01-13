import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { postPath } from '../utils/blog';
import Layout from '../components/layout';

const PostsList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Time = styled.time`
  font-size: 0.8em;
  color: #888; // TODO: Theme?
  margin-right: 1em;
`;

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
      <PostsList>
        {posts.map(postGroup => (
          <li key={postGroup[0].node.frontmatter.path}>
            <Time>{postGroup[0].node.frontmatter.date}</Time>

            <Link
              to={postPath(postGroup[0].node.frontmatter.path, postGroup[0].node.frontmatter.lang)}
            >
              {postGroup[0].node.frontmatter.title}
            </Link>
          </li>
        ))}
      </PostsList>
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
