import styled from 'styled-components';
import Box from '../Box/Box';

const Button = styled(Box)``;

Button.defaultProps = {
  as: 'button',
  backgroundColor: 'white',
  borderRadius: 4,
  color: 'black',
  fontSize: 'inherit',
};

export default Button;
