/* eslint-disable react/prop-types */
import Text from '../Text';

import styled from 'styled-components';
// import colors from '../../../constants/colors';

function Button({children, onClick, color = "#fff"}){
   
   return(<>
        <ButtonWrapper onClick={onClick}>
            <Text size="2.5em" color={color} weight="700">{children}</Text>
        </ButtonWrapper>
   </>)

}

const ButtonWrapper = styled.button`
    border-radius: 100px;
    padding: 20px 82px;
    margin-top: 16px;
    background-color: #3E1F62;
`

export default Button;