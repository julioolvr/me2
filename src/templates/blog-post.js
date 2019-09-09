import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
`;

const Post = styled.article`
  max-width: 37em;
  margin: 0 auto;
`;

const OtherPost = styled.div`
  font-size: 0.8em;
`;

const Time = styled.time`
  color: ${({ theme }) => theme.colors.lightText};
  display: block;
  margin-top: 0.5em;
`;

const Content = styled.div`
  margin-top: 2em;
`;

export default function Template({ data, pageContext, children }) {
  // I don't know more than two languages :)
  const otherPostNode = data.posts.edges.filter(
    ({ node }) => node.context.langKey !== pageContext.langKey,
  )[0];
  const otherPost = otherPostNode && otherPostNode.node;

  let otherPostText;

  if (pageContext.langKey === 'en') {
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
        <Title>{pageContext.frontmatter.title}</Title>
        <Time>{pageContext.date}</Time>

        {otherPost && (
          <OtherPost>
            <Link to={otherPost.path}>{otherPostText}</Link>
          </OtherPost>
        )}

        <Content>{children}</Content>
      </Post>
    </Layout>
  );
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    langKey: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};
