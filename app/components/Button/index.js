/**
 *
 * Button
 *
 */

import { memo } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid #222;
  background-color: #fff;
  margin: 5px;

  &:hover {
    background-color: #ccc;
  }

  span {
    color: red;
  }
`;

export default memo(StyledButton);
