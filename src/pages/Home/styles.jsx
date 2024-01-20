import styled from 'styled-components';
import colors from '../../../constants/colors';

const TopWrapper = styled.div`
 width: 100%;
 height: 40vh;
 background-color:#3E1F62;

 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 border-radius: 0px 0px 6px 6px;
`

const BottomWrapper = styled.div`
 width: 100%;
 height: 60vh;
 background-color: ${colors.lilac};

 display:flex;
 flex-direction: column;
 align-items: center;

`

const SpanWrapper = styled.div`
margin: 48px 0 32px 0;
`

export {TopWrapper, BottomWrapper, SpanWrapper};