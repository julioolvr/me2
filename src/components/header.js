import React from 'react';
import styled from 'styled-components';

import Sections from 'src/components/sections';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-bottom: 1px solid #efefef;
  font-size: 0.8em;
`;

function Header() {
  return (
    <HeaderContainer>
      <Sections />
    </HeaderContainer>
  );
}

export default Header;
