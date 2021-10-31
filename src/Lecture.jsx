import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { Body, Box, Flex, Nav, List, Item, Text } from './components/atoms';

import {
  Callback,
  Expensive,
  Memo,
  Throttle,
} from './components/best-practices';

function Lecture() {
  return (
    <Body>
      <Router>
        <Box>
          <Nav>
            <Flex>
              <Box><Link to="/">Home</Link></Box>
              <Box><Link to="/throttle">Throttle</Link></Box>
              <Box><Link to="/memo">Memo</Link></Box>
              <Box><Link to="/expensive">Expensive</Link></Box>
              <Box><Link to="/callback">Callback</Link></Box>
            </Flex>
          </Nav>
        </Box>
        <Box
          backgroundColor="#fafafa"
          border="solid 0.2px #ddd"
          borderRadius="4px 24px"
          width="640px"
          height="480px"
          margin="32px auto"
          overflow="scroll"
        >
          <Switch>
            <Route path="/callback">
              <Callback />
            </Route>
            <Route path="/memo">
              <Memo />
            </Route>
            <Route path="/expensive">
              <Expensive />
            </Route>
            <Route path="/throttle">
              <Throttle />
            </Route>
            <Route path="/">
              <Flex alignItems="center">
                <Text fontSize="3em" margin="200px auto">Lecture 9</Text>
              </Flex>
            </Route>
          </Switch>
        </Box>
      </Router>
    </Body>
  );
}

export default Lecture;
