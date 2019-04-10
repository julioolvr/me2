import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';

const Post = styled.article`
  max-width: 35em;
  margin: 0 auto;
`;

const OtherPost = styled.div`
  font-size: 0.8em;
`;

export default function Template({ data, pageContext, children }) {
  // I don't know more than two languages :)
  const otherPostNode = data.posts.edges.filter(
    ({ node }) => node.context.lang !== pageContext.lang,
  )[0];
  const otherPost = otherPostNode && otherPostNode.node;

  let otherPostText;

  if (pageContext.lang === 'en') {
    otherPostText = 'También disponible en español';
  } else {
    otherPostText = 'Also available in English';
  }

  return (
    <Layout langSwitchTo="/b">
      <Helmet>
        <title>{pageContext.frontmatter.title}</title>
      </Helmet>

      <Post>
        <h1>{pageContext.frontmatter.title}</h1>

        {otherPost && (
          <OtherPost>
            <Link to={otherPost.path}>{otherPostText}</Link>
          </OtherPost>
        )}

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
