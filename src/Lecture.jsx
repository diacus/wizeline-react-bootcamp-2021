import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { Box, Flex, Nav, Text, Title } from './components/atoms';

import { Callback, Throttle } from './components/best-practices';
import { Hoc } from './components/patterns';
import { Boundary } from './components/refactor';
import { Inversion } from './components/inversion-control';

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
              <NavBox><RouteLink to="/">DPiR</RouteLink></NavBox>
              <NavBox><RouteLink to="/hoc">HOC</RouteLink></NavBox>
              <NavBox><RouteLink to="/props">Render Props</RouteLink></NavBox>
              <NavBox><RouteLink to="/hooks">Custom Hooks</RouteLink></NavBox>
              <NavBox><RouteLink to="/refactor">Refactor</RouteLink></NavBox>
              <NavBox><RouteLink to="/inversion">Inversion of Control</RouteLink></NavBox>
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
            <Route path="/hoc">
              <Hoc />
            </Route>
            <Route path="/props">
              <Callback />
            </Route>
            <Route path="/hooks">
              <Throttle />
            </Route>
            <Route path="/refactor">
              <Boundary />
            </Route>
            <Route path="/inversion">
              <Inversion />
            </Route>
            <Route path="/">
              <Flex alignItems="center">
                <Title fontSize="3em" margin="0 auto" marginTop="128px">
                  Lecture 10
                </Title>
              </Flex>
              <Flex alignItems="center">
                <Text fontSize="2em" margin="0 auto" marginTop="48px">
                  Design Patterns in React
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
