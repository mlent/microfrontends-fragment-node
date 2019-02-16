import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Label = styled('div')`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${theme.colors.highlight};
    color: ${theme.colors.body};
    padding: ${theme.spacing.unit}px ${theme.spacing.unit * 2}px;
  `};
`;

export default Label;
