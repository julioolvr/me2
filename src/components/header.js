import React from 'react';
import styled from 'styled-components';

import Sections from 'src/components/sections';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.scale[4]} ${({ theme }) => theme.spacing.scale[6]};
  font-size: ${({ theme }) => theme.typography.scale[2]};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    justify-content: flex-end;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Sections />
    </HeaderContainer>
  );
}

export default Header;
