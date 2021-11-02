import React, { useState } from 'react';

import { Box, Button, Flex, Title } from '../../atoms';

class Shot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shotCount: 0, bullet: 0 };

    this.bang = this.bang.bind(this);
    this.getMessage = this.getMessage.bind(this);
  }

  bang() {
    const bullet = Math.floor(Math.random() * 6);
    const shotCount = this.state.shotCount + 1;

    this.setState({ bullet, shotCount });
  }

  getMessage(shotCount) {
    if (this.state.shotCount === 0) return 'En verdad quieres jugar?';
    if (this.state.shotCount === 1) return 'Suerte de principiante';

    return `Has sobrevivido ${this.state.shotCount} disparos`;
  }

  render() {
    if (this.state.bullet === 4) throw new Error('Hit!');

    const message = this.getMessage();

    return (
      <Box textAlign="center">
        <Title>Ruleta Rusa</Title>
        <Flex width="100%" paddingX="64px" paddingTop="96px">
          {message}
        </Flex>
        <Flex width="100%" paddingX="64px" paddingTop="96px">
          <Button onClick={this.bang}>Bang!</Button>
        </Flex>
      </Box>
    );
  }
}

export default Shot;
