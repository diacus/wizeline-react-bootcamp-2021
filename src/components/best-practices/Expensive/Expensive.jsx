import React from 'react';

import { slowFibo, fastFibo } from '../../../lib/fibonacci';

import {
  Box,
  Flex,
  Form,
  Input,
  Label,
  Text,
  Title,
} from '../../atoms';

import useFunction from './hooks';

function Expensive() {
  const functionStatus = useFunction(fastFibo);

  return (
    <Box textAlign="center">
      <Title marginY="96px">
        Compute Expensive Functions
      </Title>
      <Flex width="500px" margin="0 auto">
        <Form width="100%">
          <Label marginRight="16px">Enter a number:</Label>
          <Input
            onChange={functionStatus.onChange}
            ref={functionStatus.ref}
            type="text"
            value={functionStatus.number}
            width="350px"
          />
        </Form>
      </Flex>

      <Flex width="300px" margin="64px auto">
        <Text fontSize="2em">
          f({functionStatus.number}) = {functionStatus.result}
        </Text>
      </Flex>
    </Box>
  );
}

export default Expensive;
