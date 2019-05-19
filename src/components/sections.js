import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import shevy from 'src/utils/shevy';
import LinkWithLang from 'src/components/link';

const { baseSpacing } = shevy;

const Pages = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-size: ${({ big }) => (big ? '1.5em' : '1em')};
  display: ${({ vertical }) => (vertical ? 'block' : 'flex')};
`;

const Page = styled.li`
  margin: 0;
`;

const Separator = styled.div.attrs({ children: '•' })`
  opacity: 0.3;
  margin: 0 ${baseSpacing(0.3)};
`;

function Sections({ big, vertical }) {
  return (
    <Pages big={big} vertical={vertical}>
      <Page>
        <LinkWithLang to="/b">blog</LinkWithLang>
      </Page>
      {!vertical && <Separator />}
      <Page>
        <LinkWithLang to="/talks">talks</LinkWithLang>
      </Page>
      {!vertical && <Separator />}
      <Page>
        <LinkWithLang to="/things">things</LinkWithLang>
      </Page>
      {!vertical && <Separator />}
      <Page>
        <a href="https://github.com/julioolvr">github</a>
      </Page>
      {!vertical && <Separator />}
      <Page>
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
