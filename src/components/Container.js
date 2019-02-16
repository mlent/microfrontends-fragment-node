import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Container = styled('div')`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.text};
    padding: ${theme.spacing.unit * 3}px;
    width: 100%;
  `};
`;

export default Container;
