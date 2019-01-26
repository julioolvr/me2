import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const Iframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid #ccc;
  border-width: 1px;
  margin-bottom: 5px;
`;

function Slideshare({ id, title }) {
  return (
    <Wrapper>
      <Iframe
        title={title}
        src={`//www.slideshare.net/slideshow/embed_code/key/${id}`}
        frameBorder="0"
        marginWidth="0"
        marginHeight="0"
        scrolling="no"
        allowFullScreen
      />
    </Wrapper>
  );
}

Slideshare.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Slideshare;
