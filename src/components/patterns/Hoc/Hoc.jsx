import React, { useState } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';

import { Box, Button, Flex, Image, Title } from '../../atoms';

function Hoc () {
  return (
    <Box textAlign="center">
      <Title>High Order Components</Title>
      <Flex width="100%">
        <Image width="300px" src={logo} margin="0 auto" />
      </Flex>
      <Flex marginTop="64px" width="100%">
      </Flex>
    </Box>
  );
}

export default Hoc;
