/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type !== 'Mdx') return;
  if (!node.fileAbsolutePath.replace(__dirname, '').startsWith('/src/pages/b')) return;

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

  return new Promise((resolve) => {
    if (!page.path.match(/^(?:\/\w\w)?\/b\/\d/)) {
      return resolve();
    }

    if (page.context.key) {
      return resolve();
    }

    deletePage(page);

    const newPage = { ...page };

    // Extract date, language and key from the original path
    const [, date, key, lang] = newPage.path.match(/\/b\/(\d{4}\/\d{2}\/\d{2})\/([^.]+)\.(\w{2})/);

    newPage.context = {
      ...page.context,
      date,
      key,
      lang,
    };

    // Add the lang as the first part of the path for `es`,
    // `en` will be the default.
    const prefix = lang === 'en' ? '' : `/${lang}`;
    newPage.path = prefix.concat(newPage.path.replace(`.${lang}`, ''));

    createPage(newPage);

    return resolve();
  });
};
