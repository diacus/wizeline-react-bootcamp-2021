import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { Body, Box, Flex, Nav, List, Item, Text } from './components/atoms';

import { Memo, Throttle } from './components/best-practices';

function Lecture() {
  return (
    <Body>
      <Router>
        <Box>
          <Nav>
            <List>
              <Item><Link to="/">Home</Link></Item>
              <Item><Link to="/throttle">Throttle</Link></Item>
              <Item><Link to="/memo">Memo</Link></Item>
            </List>
          </Nav>
        </Box>
        <Box
          backgroundColor="#fafafa"
          border="solid 0.2px #ddd"
          borderRadius="4px 24px"
          width="640px"
          height="480px"
          margin="200px auto"
          overflow="scroll"
        >
          <Switch>
            <Route path="/memo">
              <Memo />
            </Route>
            <Route path="/throttle">
              <Throttle />
            </Route>
            <Route path="/">
              <Flex alignItems="center">
                <Text margin="auto">Lecture 9</Text>
              </Flex>
            </Route>
          </Switch>
        </Box>
      </Router>
    </Body>
  );
}

export default Lecture;
