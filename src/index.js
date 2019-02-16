import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Container from './components/Container';
import Headline from './components/Headline';
import Button from './components/Button';

const Root = ({ counter, onIncrementCounter, theme }) => {
  return (
    <Container theme={theme}>
      <Headline theme={theme}>Hello JSKongress!</Headline>
      <h2>
        Count: <strong>{counter}</strong>
      </h2>
      <Button theme={theme} onClick={onIncrementCounter}>
        Increment
      </Button>
    </Container>
  );
};

window.NodeComponent = Root;
