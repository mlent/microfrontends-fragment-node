import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Container from './components/Container';
import Headline from './components/Headline';
import Button from './components/Button';
import Label from './components/Label';

const Root = ({ counter, onIncrementCounter, theme }) => {
  return (
    <Container theme={theme}>
      <Label theme={theme}>fragment</Label>
      <Headline theme={theme}>Hello JS Kongress!</Headline>
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
