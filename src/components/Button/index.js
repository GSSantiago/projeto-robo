import Text from '../Text';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import styled from 'styled-components';
// import colors from '../../../constants/colors';

function Button({children, onPress, color}){
   
   return(<>
        <ButtonWrapper onPress={onPress}>
            <Text size="3%" color="#fff">{children}</Text>
        </ButtonWrapper>
   </>)

}

const ButtonWrapper = styled.View`
    border-radius: 5px;

    padding: 16px 32px;
   
    margin-top: 16px;

    background-color: #3E1F62;
`


export default Button;