import styled from 'styled-components';
import { system } from 'styled-system';
import PropTypes from 'prop-types';

import Box from '../Box/Box';

const Text = styled(Box)`
  hyphens: ${(props) => props.hyphens};
  -ms-hyphens: ${(props) => props.hyphens};
  -webkit-hyphens: ${(props) => props.hyphens};
  overflow-wrap: break-word;
  word-break: ${(props) => (props.hyphens === 'none' ? 'break-word' : 'normal')};
  ${system({
    textTransform: true,
  })}
`;

Text.propTypes = {
  hyphens: PropTypes.string,
};

Text.defaultProps = {
  color: 'black',
  fontFamily: 'openSans',
  fontSize: 5,
  hyphens: 'auto',
  lineHeight: 5,
};

export default Text;
