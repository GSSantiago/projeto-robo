import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styled from 'styled-components';
import colors from '../../../constants/colors';

const TopView = styled.View`
 width: ${hp('100%')}px;
 height: ${wp('40%')}px;
 background-color: ${colors.purple};

 justify-content: center;
 align-items: center;

 border-radius: 0px 0px 6px 6px;
`

const BottomView = styled.View`
 width: ${hp('100%')}px;
 height: ${wp('60%')}px;
 background-color: ${colors.lilac};

 align-items: center;
 padding-top: 32px;
`

export {TopView, BottomView};