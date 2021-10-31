import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../atoms';

const Container = styled(Flex)`
  background: #dfdfdf;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;
  width: 550px;
`;

function Task({ id, content }) {
  console.log(`Rendering task ${id}`);
  return <Container id={id}>{content}</Container>;
}

function areEqual(prevProps, nextProps) {
  console.log('comparing...');

  if (prevProps.id === nextProps.id) return true;
  return false;
}

export default React.memo(Task, areEqual);
//export default Task;
