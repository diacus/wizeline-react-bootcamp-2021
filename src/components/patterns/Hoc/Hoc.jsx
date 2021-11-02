import React, { useState } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';

import { Box, Button, Flex, Image, Title } from '../../atoms';

function Hoc () {
  const [isSpinning, setSpin] = useState(false);

  const Logo = isSpinning ? withSpin(Image) : Image;

  return (
    <Box textAlign="center">
      <Title>High Order Components</Title>
      <Flex width="100%">
        <Logo width="300px" src={logo} margin="0 auto" />
      </Flex>
      <Flex marginTop="64px" width="100%">
        <Button onClick={() => setSpin(!isSpinning)} margin="0 auto">
          {isSpinning ? 'Stop' : 'Spin'}
        </Button>
      </Flex>
    </Box>
  );
}

function withSpin(Component) {
  return styled(Component)`
    pointer-events: none;
    animation: spin 4s linear infinite;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;
}

export default Hoc;
