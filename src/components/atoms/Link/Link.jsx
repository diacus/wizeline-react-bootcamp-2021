import styled from 'styled-components';
import { system } from 'styled-system';
import Box from '../Box/Box';

const Link = styled(Box)``;

Link.defaultProps = {
  as: 'a',
  textDecoration: 'none',
};

export default Link;
