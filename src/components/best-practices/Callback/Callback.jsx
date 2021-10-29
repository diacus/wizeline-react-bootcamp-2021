import React from 'react';
import { loremIpsum } from 'lorem-ipsum';

import {
  Box,
  Button,
  Flex,
  Item,
  List,
} from '../../atoms';

import Task from './Task';

import useToDoList from './hooks';

function Callback() {
  const { tasks, addTask, removeTask, toggleTask } = useToDoList();

  return (
    <Box>
      <Flex width="100%" height="400px" paddingTop="16px" overflow="scroll">
        <List>
          {tasks.map((task) => (
            <Item key={task.id}>

              <Task
                content={task.value}
                id={task.id}
                done={task.done}
                onClick={() => toggleTask(task.id)}
              />
            </Item>
          ))}
        </List>
      </Flex>
      <Flex paddingX="64px" marginTop="32px" flexDirection="row" width="100%">
        <Button
          width="50%"
          marginRight="16px"
          onClick={() => addTask(makeTask())}
        >
          Add
        </Button>
        <Button width="50%" marginLeft="16px"onClick={removeTask}>Remove</Button>
      </Flex>
    </Box>
  );

}

function makeTask() {
  return loremIpsum({
    count: 1,
    format: 'plain',
  });
}

export default Callback;
