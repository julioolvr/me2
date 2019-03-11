/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const createLogger = require('debug');

const onCreateNodeLogger = createLogger('me:gatsby-node:onCreateNode');
const addLangToPageLogger = createLogger('me:gatsby-node:addLangToPage');
const addPostDataToContextLogger = createLogger('me:gatsby-node:addPostDataToContextLogger');
const errorLogger = createLogger('me:gatsby-node:error');

const DEFAULT_LANG = 'en';

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type !== 'Mdx') return;
  if (!node.fileAbsolutePath.replace(__dirname, '').startsWith('/src/pages/b')) return;

  const { createNodeField } = actions;

  // Extract key from path
  const fileName = path.basename(node.fileAbsolutePath, 'mdx');
  const [key, lang] = fileName.split('.');

  onCreateNodeLogger('Modifying node for %s', node.fileAbsolutePath);

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

function addLangToPage({ page, actions }) {
  const { createPage, deletePage } = actions;

  return new Promise((resolve) => {
    if (page.context.lang) {
      return resolve();
    }

    addLangToPageLogger('Deleting page %s', page.path);
    deletePage(page);

    const newPage = { ...page };

    // Extract lang from the path
    const matches = newPage.path.match(/\.(\w{2})\/$/);
    const lang = matches ? matches[1] : DEFAULT_LANG;

    // Add the lang as the first part of the path for `es`,
    // `en` will be the default.
    const prefix = lang === DEFAULT_LANG ? '' : `/${lang}`;
    newPage.path = prefix.concat(newPage.path.replace(`.${lang}`, ''));

    if (newPage.path.endsWith('/index/')) {
      newPage.path = newPage.path.replace(/\/index\/$/, '');
    }

    newPage.context = {
      ...page.context,
      lang,
    };

    createPage(newPage);
    return resolve();
  });
}

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
    const [, date, key] = newPage.path.match(/\/b\/(\d{4}\/\d{2}\/\d{2})\/([^.]+)/);

    newPage.context = {
      ...page.context,
      date,
      key,
    };

    createPage(newPage);

    return resolve();
  });
}

exports.onCreatePage = (...args) => Promise.all([
  addLangToPage(...args).catch(error => errorLogger('[addLangToPage] %O', error)),
  addPostDataToContext(...args).catch(error => errorLogger('[addPostDataToContext] %O', error)),
]);
