import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';

import { postPath } from '../utils/blog';

export default function Template({ data }) {
  const { post, otherLangs } = data;

  // I don't know more than two languages :)
  const otherPost = otherLangs && otherLangs.edges.map(edge => edge.node)[0];

  return (
    <div className="blog-post-container">
      <Helmet title={`${post.frontmatter.title} | Julio`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>

        {otherPost && <Link to={postPath(otherPost)}>{otherPost.frontmatter.lang}</Link>}

        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
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
