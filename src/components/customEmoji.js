import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Emoji = styled.img`
  height: 1em;
  width: 1em;
  margin: 0;
  vertical-align: text-top;
`;

function CustomEmoji({ name, description }) {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  return <Emoji src={require(`src/images/custom-emoji/${name}.png`)} aria-label={description} />;
}

CustomEmoji.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CustomEmoji;
