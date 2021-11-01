import React from 'react';

import { Box, Button, Flex, Text, Title } from '../../atoms';

class Shot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shots: 0, bullet: 0 };

    this.bang = this.bang.bind(this);
  }

  bang() {
    const newBullet = Math.floor(Math.random() * 6);
    const shotCount = this.state.shots + 1;

    this.setState({ shots: shotCount, bullet: newBullet });
  }

  render() {
    if (this.state && this.state.bullet === 4) {
      this.setState({ ...this.state, bullet: 0 });
      throw new Error('Hit!');
    };

    return (
      <Box textAlign="center">
        <Title>Ruleta Rusa</Title>
        <Flex width="100%" paddingX="64px" paddingTop="96px">
          Has sobrevivido a {this.state.shots} disparos
        </Flex>
        <Flex width="100%" paddingX="64px" paddingTop="96px">
          <Button onClick={this.bang}>Bang!</Button>
        </Flex>
      </Box>
    );
  }
}

export default Shot;
