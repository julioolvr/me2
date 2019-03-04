import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import {
  groupWith, groupBy, compose, map, head, prop,
} from 'ramda';

import { WithLang } from 'src/components/languageToggle';
import Layout from '../components/layout';

const PostsList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Time = styled.time`
  min-width: 100px;
  display: inline-block;
  text-align: right;
  font-size: 0.8em;
  color: #888; // TODO: Theme?
  margin-right: 1em;
`;

function bestPostForLang(lang) {
  return (postGroup) => {
    if (postGroup[lang]) {
      return postGroup[lang];
    }
    return postGroup[Object.keys(postGroup)[0]];
  };
}

function Blog({ data }) {
  const posts = compose(
    map(map(head)),
    map(groupBy(edge => edge.context.lang)),
    groupWith((a, b) => a.context.key === b.context.key),
    map(prop('node')),
  )(data.posts.edges);

  return (
    <Layout centered>
      <WithLang>
        {lang => (
          <PostsList>
            {posts.map(bestPostForLang(lang)).map(post => (
              <li key={post.path}>
                <Time>{post.context.date}</Time>

                <Link to={post.path}>{post.context.frontmatter.title}</Link>
              </li>
            ))}
          </PostsList>
        )}
      </WithLang>
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
      filter: { path: { regex: "/^(?:/\\w\\w)?/b/\\d/" } }
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
