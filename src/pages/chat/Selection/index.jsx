import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Messages from '../../../components/Messages';

function SelectionChat(){

   const [isActive, setActive] = useState(0);

   const navigate = useNavigate();


   const userMessages = [
      {
         id: 4,
         content: 'Eu adoraria falar um pouco sobre o que estou sentindo, eu permito você analisar minha feição',
         redirect: '/feelings'
      },
      {
         id: 5,
         content: 'Eu adoraria saber sobre a localização dos locais do DC, estou um pouco sem rumo',
         redirect: '/map'

      },
      {
         id: 6,
         content: 'Preciso falar com um funcionário do DC, como posso contatá-los ?',
         redirect: '/contacts'
      },
      {
         id: 7,
         content: 'Quais opções de ajuda você possui?',
         redirect: '/help'
      },
      {
         id: 8,
         content: 'Pra falar a verdade, estou sem tempo e preciso sair, até a próxima!',
         response: 'Tudo bem, até a próxima',
         redirect: '/'
      }
   ]

   const redirectTo = (link) => { setTimeout(() => navigate(link), 3000)}

   return(
   <>
   
      <Messages.Robot>
         Olá! Eu sou o seu colega de curso, nascido com a mais recente tecnologia para estudar e aprender sobre programação e o dia a dia. Estou estudando diversas matérias
         e posso ajudá-lo de diversas maneiras caso precise. Você esta precisando de algo ? Se você permitir, posso analisar a sua feição e assim podemos conversar 
         sobre o que você está sentindo agora, ou, talvez queira saber onde fica as salas aqui no nosso departamento, já sei, você quer saber as curiosidades da faculdade 
         com a computação ?  
      </Messages.Robot>
   
      {userMessages.map((message) => 
            <Messages.User 
               isActive={isActive == message.id} 
               key={message.id} 
               onClick={() => {
                  if(!isActive){
                     setActive(message.id)
                     redirectTo(message.redirect)
                  }
               }} 
               seconds={message.id / 2}
            >
               {message.content}
            </Messages.User>
         )   
      }
      
   {!!isActive && 
      <Messages.Robot typeanimate="true" fitContent>
         {userMessages.find(message => message.id == isActive)?.response || 'Ótimo, vamos lá então.'}
      </Messages.Robot>
    }
   </>)

}

export default SelectionChat;