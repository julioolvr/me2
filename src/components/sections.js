import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LinkWithLang from 'src/components/link';

const Pages = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-size: ${({ big }) => (big ? '1.5em' : '1em')};
  display: ${({ vertical }) => (vertical ? 'block' : 'flex')};
  justify-content: space-between;
  width: 100%;
  min-width: ${({ theme }) => theme.spacing.scale[11]};
  max-width: ${({ theme }) => theme.spacing.scale[12]};

  a {
    color: var(--text-color);
  }
`;

const Page = styled.li`
  margin: 0;
  margin-top: ${({ vertical, theme }) => vertical && theme.spacing.scale[2]};
`;

function Sections({ big, vertical }) {
  return (
    <Pages big={big} vertical={vertical}>
      <Page vertical={vertical}>
        <LinkWithLang to="/b">blog</LinkWithLang>
      </Page>
      <Page vertical={vertical}>
        <LinkWithLang to="/talks">talks</LinkWithLang>
      </Page>
      <Page vertical={vertical}>
        <LinkWithLang to="/things">things</LinkWithLang>
      </Page>
      <Page vertical={vertical}>
        <a href="https://github.com/julioolvr">github</a>
      </Page>
      <Page vertical={vertical}>
        <a href="https://twitter.com/julioolvr">twitter</a>
      </Page>
    </Pages>
  );
}

Sections.propTypes = {
  big: PropTypes.bool,
  vertical: PropTypes.bool,
};

Sections.defaultProps = {
  big: false,
  vertical: false,
};

export default Sections;
