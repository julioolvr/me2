import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import {
  groupWith, groupBy, compose, map, head, prop,
} from 'ramda';

import { WithLang } from 'src/components/languageToggle';
import MultiLangPost from 'src/components/multiLangPost';
import Layout from 'src/components/layout';

const PostsList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

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
            {posts.map(postGroup => (
              <MultiLangPost postGroup={postGroup} lang={lang} />
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
