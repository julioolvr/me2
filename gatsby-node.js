/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");
const R = require('ramda');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  // TODO: Check limit
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date
              path
              key
              lang
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // TODO: Better Ramda
    const sorter = R.sortWith([
      R.descend(R.prop('date')),
      R.ascend(R.prop('key'))
    ]);

    const files = R.sort(sorter, result.data.allMarkdownRemark.edges.map(({ node }) => node));
    const groupedFiles = R.groupWith((a, b) => a.frontmatter.key === b.frontmatter.key, files);

    groupedFiles.forEach(files => {
      files.forEach(file => {
        createPage({
          path: file.frontmatter.path,
          component: blogPostTemplate,
          context: {
            otherLangs: files.filter(otherFile => file !== otherFile)
          }
        });
      });
    });
  });
};
