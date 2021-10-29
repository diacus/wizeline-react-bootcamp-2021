import React from 'react';
import styled from 'styled-components';
import { Flex, Button } from '../../atoms';

const Container = styled(Flex)`
  background: #dfdfdf;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;
  width: 550px;
  &:hover {
    cursor: pointer;
  }
`;

function Task({ id, done, content, onClick }) {
  console.log(`Rendering task ${id}`);
  return (
    <Container
      id={id}
      onClick={onClick}
      color={done ? '#999' : 'black'}
    >
      {content}
    </Container>
  );
}

function areEqual(prevProps, nextProps) {
  console.log('comparing...');

  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.done !== nextProps.done) return false;

  return true;
}

export default React.memo(Task, areEqual);
