/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';


function Robot({children, typeanimate}){

    const date = new Date();
    
    const formatTime = {
        hour: 'numeric',
        minute: 'numeric',
      };

   return(<>
        <MessageWrapper>
            <Triangle/>
            <TopWrapper><h1>Robô</h1> <h2>Amigão do DC</h2></TopWrapper>
            {typeanimate ? 
                 <TypeAnimation
                 sequence={[children]}
                 speed={50}
                 cursor={false}
               />
            :
                <p>{children}</p>
            }
            <BottomWrapper><h5>{date.toLocaleTimeString('pt-br', formatTime)}</h5></BottomWrapper>
        </MessageWrapper>
    
   </>)

}

const MessageWrapper = styled.div`
  border-radius: 0px 6px 6px 6px;
  padding: 8px 8px 4px 8px;
  position: relative;
  margin-bottom: 36px;

  width: fit-content;

  color: #000;
  background-color: #fff;

  p{
    font-weight: 500;
    font-size: 14px;
  }

`

const TopWrapper = styled.div`
   display: flex;
   margin-bottom: 6px;

   h1 {
    font-size: 14px;
    font-weight: 600;
   }
   
   h2 {
    font-size: 14px;
    color: #666668;
    font-weight: 400;
    margin-left: 12px;
   }

`

const BottomWrapper = styled.div`
 text-align: right;

 h5 {
    font-weight: 300;
    color: #666668;
 }
`

const Triangle = styled.div`
position: absolute;
top: 0;
left: -15px;

width: 0;
height: 0;
border-right: 0px solid transparent;
border-left: 16px solid transparent;
border-top: 16px solid #fff; 
border-top-left-radius: 4px; 


  
`


export default Robot;