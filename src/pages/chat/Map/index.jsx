


import Messages from '../../../components/Messages';
import { MapView } from './styles';


function MapChat(){

   return(
   <>
      <Messages.Robot>
         Olá! Eu sou o seu colega de curso, nascido com a mais recente tecnologia para estudar e aprender sobre programação e o dia a dia. Estou estudando diversas matérias
         e posso ajudá-lo de diversas maneiras caso precise. Você esta precisando de algo ? Se você permitir, posso analisar a sua feição e assim podemos conversar 
         sobre o que você está sentindo agora, ou, talvez queira saber onde fica as salas aqui no nosso departamento, já sei, você quer saber as curiosidades da faculdade 
         com a computação ?  
      </Messages.Robot>

      <MapView></MapView>

   </>)

}

export default MapChat;