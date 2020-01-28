import React from 'react';

function wrap(Wrapper) {
  return Component => props => (
    <Wrapper>
      <Component {...props} />
    </Wrapper>
  );
}

export default wrap;
