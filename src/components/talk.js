import React from 'react';
import PropTypes from 'prop-types';

function Talk({ title, subtitle, children }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </>
  );
}

Talk.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Talk;
