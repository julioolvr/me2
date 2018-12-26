module.exports = {
  postPath(post) {
    return `/b/${post.frontmatter.lang}${post.frontmatter.path}`;
  },
};
