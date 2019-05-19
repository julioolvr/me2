import React from 'react';
import styled from 'styled-components';

import LinkWithLang from 'src/components/link';

const Pages = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
`;

const Page = styled.li`
  margin: 0;
  font-size: 1.5em;
`;

function Sections() {
  return (
    <Pages>
      <Page>
        <LinkWithLang to="/me">me</LinkWithLang>
      </Page>
      <Page>
        <LinkWithLang to="/b">blog</LinkWithLang>
      </Page>
      <Page>
        <LinkWithLang to="/talks">talks</LinkWithLang>
      </Page>
      <Page>
        <LinkWithLang to="/things">things</LinkWithLang>
      </Page>
      <Page>
        <a href="https://github.com/julioolvr">github</a>
      </Page>
      <Page>
        <a href="https://twitter.com/julioolvr">twitter</a>
      </Page>
    </Pages>
  );
}

export default Sections;
