
import Messages from '../../../components/Messages';
import Grid from '../../../components/Gridbox';
import colors from '../../../../constants/colors';
import styled from 'styled-components';

const CustomTitle = styled.h4`
  font-size: 1.5em; /* Ajuste o tamanho da fonte conforme necessário */
  text-align: center;
`;

function HelpChat() {
  return (
    <>
      <Messages.Robot>
        Boa, tenho várias informações sobre as matérias que estou cursando e das que já cursei, abaixo você pode selecionar um tópico do seu interesse, minhas informações com certeza irão incrementar muito seu conhecimento, e me ajudará a melhorar o que eu já sei.
      </Messages.Robot>

      <Grid.Wrapper>
        <Grid.Box>
          <CustomTitle>Linguagem C</CustomTitle>
          <p>
            A linguagem C é essencial na computação, usada para desenvolver software de sistemas e aplicativos que exigem manipulação direta de memória.
            É conhecida por sua eficiência e controle próximo do hardware.
          </p>
        </Grid.Box>

        <Grid.Box bgColor={colors.yellow} color="#000">
          <CustomTitle>Cálculo I</CustomTitle>
          <p>
            Cálculo I introduz conceitos de limites, derivadas e integrais, essenciais para entender taxas de mudança e acumulação em várias áreas, como física e economia.
          </p>
        </Grid.Box>

        <Grid.Box>
          <CustomTitle>Machine Learning</CustomTitle>
          <p>
            Machine Learning é um ramo da inteligência artificial focado em algoritmos que aprendem e fazem previsões a partir de dados, aplicado em áreas como diagnóstico médico e sistemas de recomendação.
          </p>
        </Grid.Box>

        <Grid.Box bgColor={colors.yellow} color="#000">
          <CustomTitle>Visão Computacional</CustomTitle>
          <p>
            Visão Computacional permite que computadores interpretem o mundo visual, identificando objetos e cenas em imagens e vídeos, com aplicações em segurança, automação e análise médica.
          </p>
        </Grid.Box>
      </Grid.Wrapper>
    </>
  );
}

export default HelpChat;