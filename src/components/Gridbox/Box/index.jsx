import styled from 'styled-components';

import colors from '../../../../constants/colors';

const Box = styled.div`
 background-color: ${({bgColor}) =>  bgColor || colors.purple};

 height: 100%;
 color: ${({color}) =>  color || '#fff'};

 padding: 16px;

 border-radius: 16px;

 
`

export default Box;