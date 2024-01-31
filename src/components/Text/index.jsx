import styled from 'styled-components';
import colors from '../../../constants/colors';

const Text = styled.span`

 font-size: ${({size}) => size || '16px'};
 color: ${({color}) => color || colors.white };
 width: 100%;
 text-align: center;

 font-weight: ${({weight}) => weight || '400'}
 
`

export default Text;