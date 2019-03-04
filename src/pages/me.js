import React from 'react';
import styled from 'styled-components';

import CustomEmoji from 'src/components/customEmoji';
import Layout from 'src/components/layouts/me';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

function Me() {
  return (
    <Layout>
      <List>
        <li>
          <span role="img" aria-label="Argentinian flag">
            🇦🇷
          </span>{' '}
          Software engineer from Buenos Aires
        </li>

        <li>
          <CustomEmoji name="ruby" description="Ruby logo" /> Working with Ruby and{' '}
          <CustomEmoji name="js" description="JavaScript logo" /> JavaScript
        </li>

        <li>
          <span role="img" aria-label="Search icon">
            🔎
          </span>{' '}
          Website Lead @ <a href="https://constructor.io/">Constructor.io</a>
        </li>
      </List>
    </Layout>
  );
}

export default Me;
