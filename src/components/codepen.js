import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function Codepen({ id, username }) {
  return (
    <p
      data-height="324"
      data-theme-id="0"
      data-slug-hash={id}
      data-default-tab="result"
      className="codepen"
    >
      See the Pen
      <a href={`http://codepen.io/${username}/pen/${id}/`}>{id}</a>
      by {username}(<a href={`http://codepen.io/${username}`}>@{username}</a>)
      on <a href="http://codepen.io">CodePen</a>.
      <Helmet>
        <script async src="//codepen.io/assets/embed/ei.js" />
      </Helmet>
    </p>
  );
}

Codepen.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string,
};

Codepen.defaultProps = {
  username: 'julioolvr',
};

export default Codepen;
