/* eslint-disable react/prop-types */
import Text from '../Text';

import styled from 'styled-components';
// import colors from '../../../constants/colors';

function Button({children, onClick,size = "2.5em", color = "#fff", bgcolor = "#3E1F62"}){
   
   return(<>
        <ButtonWrapper bgcolor={bgcolor} onClick={onClick}>
            <Text size={size} color={color} weight="700">{children}</Text>
        </ButtonWrapper>
   </>)

}

const ButtonWrapper = styled.button`
    border-radius: 100px;
    padding: 20px 82px;
    margin-top: 16px;
    border-color: transparent;
    background-color: ${({bgcolor}) => bgcolor};
`

export default Button;