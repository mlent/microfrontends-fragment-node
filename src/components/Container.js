import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Container = styled('div')`
  ${({ theme }) => css`
    border: 3px solid ${theme.colors.highlight};
    padding: ${theme.spacing.unit * 3}px;
    width: 100%;
    height: 100%;
    position: relative;
  `};
`;

export default Container;
