import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styled from 'styled-components';
import colors from '../../../constants/colors';

const Text = styled.Text`

 font-size: ${({size}) => hp(size)}px;
 color: ${({color}) => color || colors.white };
 width: 100%;
 text-align: center;

 ${({bold}) => bold ? 'font-weight: bold;' : ''}
 
`

export default Text;