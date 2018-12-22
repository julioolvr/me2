import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby';

export default function Template({
  data,
  pageContext
}) {
  const { markdownRemark: post } = data;

  return (
    <div className="blog-post-container">
      <Helmet title={`${post.frontmatter.title} | Julio`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($postPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
