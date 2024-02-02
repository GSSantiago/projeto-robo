/* eslint-disable react/prop-types */
import styled, {keyframes } from 'styled-components';
import colors from '../../../../constants/colors';

function User({children, isActive, onClick, width, seconds}){


   return(<>
        <MessageWrapper onClick={onClick} seconds={seconds} width={width}>
            <Triangle/>
            {onClick && <Checkbox isActive={isActive ? "true" : ""}/> } 
            <div>
            <p>{children}</p>
            </div>
        </MessageWrapper>
    
   </>)

}

const showMessage = keyframes`
 from {
  opacity: 0;
  margin-top: 100px
 }

 to {
    opacity: 1;
    margin-top: 0;
 }
`

const MessageWrapper = styled.div`

animation: ${showMessage} ${({seconds}) => seconds || '2'}s linear;

  cursor: pointer;

  border-radius: 6px 0px 6px 6px;
  padding: 14px 16px 16px 14px;

  position: relative;
  margin-bottom: 36px;
  margin-left: auto;
  margin-right: 16px;
  width: ${({width}) => width ? width  : "fit-content"};

  display: flex;
  align-items: center;
  gap: 12px;

  color: #fff;
  background-color: ${colors.purple};

  p{
    font-weight: 400;
    font-size: 14px;
  }

`

const Triangle = styled.div`
position: absolute;
top: 0;
right: -15px;

width: 0;
height: 0;
border-left: 0px solid transparent;
border-right: 16px solid transparent;
border-top: 16px solid ${colors.purple}; 
border-top-right-radius: 4px; 

`

const Checkbox = styled.div`
  background-color: #fff;

  width: 10px;
  height: 10px;
  position: relative;

  border-radius: 50%;
  border: 1px solid #cfd5de;


${({isActive}) => isActive && 
`
  &::before{
    content: '';

    position: absolute;
    display: block;
    background-color: #000;
    top: 2px;
    right: 2px;

    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`
}
`

export default User;