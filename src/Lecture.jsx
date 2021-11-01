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
              <NavBox><RouteLink to="/">BPnP</RouteLink></NavBox>
              <NavBox><RouteLink to="/throttle">Throttle</RouteLink></NavBox>
              <NavBox><RouteLink to="/memo">Memo</RouteLink></NavBox>
              <NavBox><RouteLink to="/remember">Remember</RouteLink></NavBox>
              <NavBox><RouteLink to="/callback">Callback</RouteLink></NavBox>
              <NavBox><RouteLink to="/boundary">Boundary</RouteLink></NavBox>
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
            <Route path="/callback">
              <Callback />
            </Route>
            <Route path="/memo">
              <Memo />
            </Route>
            <Route path="/remember">
              <Remember />
            </Route>
            <Route path="/throttle">
              <Throttle />
            </Route>
            <Route path="/boundary">
              <Boundary />
            </Route>
            <Route path="/">
              <Flex alignItems="center">
                <Title fontSize="3em" margin="0 auto" marginTop="128px">
                  Lecture 9
                </Title>
              </Flex>
              <Flex alignItems="center">
                <Text fontSize="2em" margin="0 auto" marginTop="48px">
                  Best Practices & Performance
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
