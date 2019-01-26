import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { groupWith } from 'ramda';

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
  const posts = groupWith((a, b) => a.node.context.key === b.node.context.key, data.posts.edges);

  return (
    <Layout centered>
      <PostsList>
        {posts.map(postGroup => (
          <li key={postGroup[0].node.path}>
            <Time>{postGroup[0].node.context.date}</Time>

            <Link to={postGroup[0].node.path}>{postGroup[0].node.context.frontmatter.title}</Link>
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
    posts: allSitePage(
      filter: { path: { regex: "/^/b/2/" } }
      sort: { order: DESC, fields: context___date }
    ) {
      edges {
        node {
          path
          context {
            key
            lang
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
