import React from 'react';

import { Box, Button, Text, Title } from '../../atoms';
import { doSomethingDifficult } from '../../../api/fake-api';

import useThrottle from './hooks';

function Throttle() {

  const { isActive, callback } = useThrottle(doSomethingDifficult);

  const title = isActive ? 'Loading...' : 'Ready';
  const label = isActive ? 'Please wait...' : 'Click me!';

  return (
    <Box margin="128px auto" paddingX="128px">
      <Title>{title}</Title>
      <Box margin="64px auto">
        <Button onClick={callback}>{label}</Button>
      </Box>
    </Box>
  );
};

export default Throttle;
