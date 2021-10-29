import React, { useState } from 'react';
import logo from './logo.svg';

import { Body, Box, Image, Text, Link } from './components/atoms';

import { Throttle } from './components/best-practices';

const lessonsAvailable = {
  Throttle,
};

function Lecture() {
  const [currentLesson, setLesson] = useState('Throttle');
  const Lesson = lessonsAvailable[currentLesson];

  return (
    <Body>
      <Box border="solid 0.2px blue" margin="200px auto" padding="128px">
        <Lesson />
      </Box>
    </Body>
  );
}

export default Lecture;
