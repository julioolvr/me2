import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import {
  groupWith, groupBy, compose, map, head, prop,
} from 'ramda';

import MultiLangPost from 'src/components/multiLangPost';
import Layout from 'src/components/layout';

const PostsList = styled.ol`
  list-style: none;
  width: 40em;
  margin: 0;
  padding: 0;
`;

function Blog({ data, pageContext }) {
  const posts = compose(
    map(map(head)),
    map(groupBy(edge => edge.context.langKey)),
    groupWith((a, b) => a.context.key === b.context.key),
    map(prop('node')),
  )(data.posts.edges);

  return (
    <Layout centered>
      <PostsList>
        {posts.map(postGroup => (
          <MultiLangPost
            key={Object.values(postGroup)[0].context.key}
            postGroup={postGroup}
            lang={pageContext.langKey}
          />
        ))}
      </PostsList>
    </Layout>
  );
}

Blog.propTypes = {
  data: PropTypes.shape({ posts: PropTypes.object }).isRequired,
  pageContext: PropTypes.shape({ langKey: PropTypes.string.isRequired })
    .isRequired,
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
