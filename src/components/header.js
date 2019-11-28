import React from 'react';
import styled from 'styled-components';

import Menu from 'src/components/menu';

function Header() {
  return (
    <HeaderContainer>
      <Menu />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing.scale[2]};
  font-size: ${({ theme }) => theme.typography.scale[2]};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    justify-content: flex-end;
    padding: ${({ theme }) => theme.spacing.scale[4]} ${({ theme }) => theme.spacing.scale[6]};
  }
`;
