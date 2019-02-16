import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Button = styled('button')`
  ${({ theme }) => css`
    background-color: ${theme.colors.body};
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.text};
    margin-top: ${theme.spacing.unit * 10}px;

    &:active {
      background-color: ${theme.colors.highlight};
    }
  `};
`;

export default Button;
