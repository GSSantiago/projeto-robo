/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import styled from 'styled-components';
import colors from '../../../constants/colors';
import Button from '../Button';
import Messages from '../Messages';
import emotions from '../../../constants/emotion';


function Feelings({ dominantEmotion}){
    const [selectedEmotions, setSelectedEmotions] = useState(emotions.find(x => x.emotion?.toLowerCase() == dominantEmotion)?.valence.map((item, index) => ({id: index, feeling: item, selected: false})) || []);

    const navigate = useNavigate();

    const handleFeelings = (id) => {
        if(selectedEmotions.filter(item => item.selected).length < 3){
            const indexAux = selectedEmotions.findIndex(item => item.id == id)
            const arrayAux = [...selectedEmotions];

            arrayAux[indexAux].selected = !arrayAux[indexAux].selected;
            
            setSelectedEmotions(arrayAux);
        }
    }

    const redirectTo = (link) => { setTimeout(() => navigate(link), 3000)}

    console.log("Emoção dominante", dominantEmotion)

   return(
   <>
        <Wrapper>
            {
            selectedEmotions.map((item) => 
            <Button 
            size="16px"
            onClick={() => handleFeelings(item.id)}
            bgcolor={item.selected ? colors.purple : colors.pink}
            key={item.id}>
                {item.feeling}
            </Button>)         
            }
        </Wrapper>
        <Messages.User width={selectedEmotions.find(x => x.selected) ? "fit-content" : "100px"}>{selectedEmotions.filter(x => x.selected).map(y => y.feeling).join(", ")}</Messages.User>
        {selectedEmotions.filter(item => item.selected).length === 3 && 
            <>
                <Messages.Robot typeanimate="true" fitContent >Entendo, posso te ajudar com isso</Messages.Robot>
                {redirectTo(`/feelings/${dominantEmotion}`)
}
            </>
        }
   </>)

}

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    height: 50vh;
    margin-bottom: 32px;

    button {
        padding: 12px 24px;
        margin: 0;
        position: absolute;
        span {
            font-weight: 400;
        }
    }

    button:nth-child(1){
        top: 146px;
        left: 248px;
    }
    }

    button:nth-child(2){
        top: 0;
        left: 290px
    }

    button:nth-child(3){
        top: 41px;
        left: 469px;
    }

    button:nth-child(4){
        top: 90px;
        left: 700px;
    }

    button:nth-child(5){
        bottom: 90px;
        right: 404px;
    }

    button:nth-child(6){
        top: 0px;
        right: 0;
    }

    button:nth-child(7){
        top: 90px;
    }

    button:nth-child(8){
        bottom: 90px;
        right: 82px;
    }

`

export default Feelings;