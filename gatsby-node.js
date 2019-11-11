/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const createLogger = require('debug');

const onCreateNodeLogger = createLogger('me:gatsby-node:onCreateNode');
const addPostDataToContextLogger = createLogger(
  'me:gatsby-node:addPostDataToContextLogger',
);

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type !== 'Mdx') return;
  if (!node.fileAbsolutePath.replace(__dirname, '').startsWith('/src/pages/b')) return;

  const { createNodeField } = actions;

  // Extract key from path
  const fileName = path.basename(node.fileAbsolutePath, 'mdx');
  const [key] = fileName.split('.');

  onCreateNodeLogger('Modifying node for %s', node.fileAbsolutePath);

  createNodeField({
    node,
    name: 'key',
    value: key,
  });
};

function addPostDataToContext({ page, actions }) {
  const { createPage, deletePage } = actions;

  return new Promise((resolve) => {
    if (!page.path.match(/^(?:\/\w\w)?\/b\/\d/)) {
      return resolve();
    }

    if (page.context.key) {
      return resolve();
    }

    addPostDataToContextLogger('Deleting page %s', page.path);
    deletePage(page);

    const newPage = { ...page };

    // Extract date and key from the path
    const [, date, key] = newPage.path.match(
      /\/b\/(\d{4}\/\d{2}\/\d{2})\/([^.]+)/,
    );

    newPage.context = {
      ...page.context,
      date,
      key,
    };

    createPage(newPage);

    return resolve();
  });
}

exports.onCreatePage = addPostDataToContext;
