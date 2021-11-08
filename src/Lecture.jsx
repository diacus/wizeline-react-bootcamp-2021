import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { Box, Flex, Nav, Text, Title } from './components/atoms';

import {
  Boundary,
  Callback,
  Remember,
  Memo,
  Throttle,
} from './components/best-practices';

const NavBox = styled(Box)`
  padding: 8px 16px;
  border-radius: 8px 8px 0 0;
  &:hover {
    color: #4CAF50;
    background-color: #fafafa;
  }
`;

const RouteLink = styled(Link)`
  text-decoration: none;
`;

function Lecture() {
  return (
    <Box>
      <Router>
        <Box>
          <Nav>
            <Flex display="inline-flex" flexWrap="wrap">
              <NavBox><RouteLink to="/">SAnT</RouteLink></NavBox>
              <NavBox><RouteLink to="/linting">Linting</RouteLink></NavBox>
              <NavBox><RouteLink to="/unit">Unitary</RouteLink></NavBox>
              <NavBox><RouteLink to="/integ">Integration</RouteLink></NavBox>
              <NavBox><RouteLink to="/e2e">End to End</RouteLink></NavBox>
            </Flex>
          </Nav>
        </Box>
        <Box
          backgroundColor="#fafafa"
          width="100%"
          minHeight="100vh"
          margin="0 auto"
          paddingY="32px"
          overflow="scroll"
        >
          <Switch>
            <Route path="/linting">
              <Callback />
            </Route>
            <Route path="/unit">
              <Memo />
            </Route>
            <Route path="/integ">
              <Remember />
            </Route>
            <Route path="/e2e">
              <Throttle />
            </Route>
            <Route path="/">
              <Flex alignItems="center">
                <Title fontSize="3em" margin="0 auto" marginTop="128px">
                  Lecture 10
                </Title>
              </Flex>
              <Flex alignItems="center">
                <Text fontSize="2em" margin="0 auto" marginTop="48px">
                  Static Analysis & Testing
                </Text>
              </Flex>
            </Route>
          </Switch>
        </Box>
      </Router>
    </Box>
  );
}

export default Lecture;
