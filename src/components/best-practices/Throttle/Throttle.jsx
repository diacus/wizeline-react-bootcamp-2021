import React from 'react';

import { Box, Button, Text } from '../../atoms';
import { doSomethingDifficult } from '../../../api/fake-api';

import useThrottle from './hooks';

function Throttle() {

  const { isActive, callback } = useThrottle(doSomethingDifficult);

  const message = isActive ? 'Loading...' : 'Ready';

  return (
    <Box>
      <Text>{message}</Text>
      <Button onClick={callback}>Click me!</Button>
    </Box>
  );
};

export default Throttle;
