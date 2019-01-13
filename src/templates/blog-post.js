import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import { postPath } from '../utils/blog';

const Post = styled.article`
  max-width: 40em;
  padding: 1.5em;
  margin: 0 auto;
`;

export default function Template({ data }) {
  const { post, otherLangs } = data;

  // I don't know more than two languages :)
  const otherPost = otherLangs && otherLangs.edges.map(edge => edge.node)[0];

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | Julio`} />
      <Post>
        <h1>{post.frontmatter.title}</h1>

        {otherPost && (
          <Link to={postPath(otherPost.frontmatter.path, otherPost.frontmatter.lang)}>
            {otherPost.frontmatter.lang}
          </Link>
        )}

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>
    </Layout>
  );
}

Template.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.object.isRequired,
    otherLangs: PropTypes.object,
  }).isRequired,
};

export const pageQuery = graphql`
  query BlogPostByPath($postPath: String!, $lang: String!, $key: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $postPath }, lang: { eq: $lang } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }

    otherLangs: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: $key }, lang: { ne: $lang } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            lang
          }
        }
      }
    }
  }
`;
