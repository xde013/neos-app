import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2em auto;
  width: 40px;
  height: 40px;
  position: relative;
`;

const LoadingIndicator = () => (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
);

export default LoadingIndicator;
