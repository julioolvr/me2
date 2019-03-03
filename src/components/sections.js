import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Pages = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const Page = styled.li`
  padding: 0 10px;
  margin: 0;

  & + & {
    border-left: 1px solid black;
  }
`;

function Sections() {
  return (
    <Pages>
      <Page>
        <Link to="/me">me</Link>
      </Page>
      <Page>
        <Link to="/b">blog</Link>
      </Page>
      <Page>
        <Link to="/talks">talks</Link>
      </Page>
      <Page>
        <Link to="/things">things</Link>
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
