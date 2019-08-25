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
`;

const Page = styled.li`
  margin: 0;
  margin-top: ${({ vertical, theme }) => vertical && theme.spacing.scale[2]};
`;

const Separator = styled.div.attrs({ children: '•' })`
  opacity: 0.3;
  margin: 0 ${({ theme }) => theme.spacing.scale[1]};
`;

function Sections({ big, vertical }) {
  return (
    <Pages big={big} vertical={vertical}>
      <Page vertical={vertical}>
        <LinkWithLang to="/b">blog</LinkWithLang>
      </Page>
      {!vertical && <Separator />}
      <Page vertical={vertical}>
        <LinkWithLang to="/talks">talks</LinkWithLang>
      </Page>
      {!vertical && <Separator />}
      <Page vertical={vertical}>
        <LinkWithLang to="/things">things</LinkWithLang>
      </Page>
      {!vertical && <Separator />}
      <Page vertical={vertical}>
        <a href="https://github.com/julioolvr">github</a>
      </Page>
      {!vertical && <Separator />}
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
