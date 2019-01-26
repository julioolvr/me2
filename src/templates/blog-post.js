import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';

const Post = styled.article`
  max-width: 35em;
  padding: 1.5em;
  margin: 0 auto;
`;

export default function Template({ data, pageContext, children }) {
  // I don't know more than two languages :)
  const otherPostNode = data.posts.edges.filter(
    ({ node }) => node.context.lang !== pageContext.lang,
  )[0];
  const otherPost = otherPostNode && otherPostNode.node;

  return (
    <Layout>
      <Post>
        <h1>{pageContext.frontmatter.title}</h1>

        {otherPost && <Link to={otherPost.path}>{otherPost.context.lang}</Link>}

        {children}
      </Post>
    </Layout>
  );
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({ lang: PropTypes.string.isRequired }).isRequired,
  data: PropTypes.shape({
    posts: PropTypes.shape({ edges: PropTypes.arrayOf(PropTypes.object) }),
  }).isRequired,
};
