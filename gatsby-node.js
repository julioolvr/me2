/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type !== 'Mdx') return;

  const { createNodeField } = actions;

  // Extract key from path
  const fileName = path.basename(node.fileAbsolutePath, 'mdx');
  const [key, lang] = fileName.split('.');

  createNodeField({
    node,
    name: 'key',
    value: key,
  });

  createNodeField({
    node,
    name: 'lang',
    value: lang,
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (!page.path.startsWith('/b/2')) {
    return Promise.resolve();
  }

  if (page.context.key) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const oldPage = Object.assign({}, page);
    const newPage = Object.assign({}, page);
    newPage.context = Object.assign({}, page.context);

    // Extract date, language and key from the original path
    const [, date, key, lang] = page.path.match(/\/b\/(\d{4}\/\d{2}\/\d{2})\/([^.]+)\.(\w{2})/);

    newPage.context.date = date;
    newPage.context.key = key;
    newPage.context.lang = lang;

    // Add the lang as a subpath (so /en instead of .en)
    newPage.path = oldPage.path.replace(`.${lang}`, `/${lang}`);

    deletePage(oldPage);
    createPage(newPage);

    resolve();
  });
};
