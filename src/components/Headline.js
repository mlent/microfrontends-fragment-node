import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Headline = styled('h1')`
  ${({ theme }) => css`
    color: ${theme.colors.highlight};
  `};
`;

export default Headline;
