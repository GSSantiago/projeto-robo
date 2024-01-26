import { useNavigate } from "react-router-dom";
import Messages from "../../../components/Messages";
import Grid from "../../../components/Gridbox";
import colors from "../../../../constants/colors";
import styled from "styled-components";
import CalculoIMG from "/src/img/matematica.png";
import VisCmpIMG from "/src/img/VisCmpImg.jpg";
import LgnCIMG from "/src/img/LinguagemC.png";
import MLIMG from "/src/img/MLimg.jpg";

const CustomTitleClicable = styled.h4`
  font-size: 1.5em;
  text-align: center;
  cursor: pointer;
`;
const CustomTitle = styled.h4`
  font-size: 1.5em;
  text-align: center;
`;

function HelpChat() {
  const navigate = useNavigate();

  const navigateToLinguagemC = () => {
    navigate("/linguagem-c");
  };

  const navigateToVisCmp = () => {
    navigate("/VisCmp");
  };

  const boxContentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%", // Adjust height as needed
  };

  const imageStyle = {
    width: "80%",
    height: "auto",
    borderRadius: "20px",
    marginTop: "20px",
  };

  return (
    <>
      <Messages.Robot>
        Boa, tenho várias informações sobre as matérias que estou cursando e das
        que já cursei, abaixo você pode selecionar um tópico do seu interesse,
        minhas informações com certeza irão incrementar muito seu conhecimento,
        e me ajudará a melhorar o que eu já sei.
      </Messages.Robot>

      <Grid.Wrapper>
        <Grid.Box onClick={navigateToLinguagemC} style={boxContentStyle}>
          <CustomTitleClicable>Linguagem C</CustomTitleClicable>
          <p>
            A linguagem C é essencial na computação, usada para desenvolver
            software de sistemas e aplicativos que exigem manipulação direta de
            memória. É conhecida por sua eficiência e controle próximo do
            hardware.
          </p>
          <img src={LgnCIMG} style={imageStyle} alt="Linguagem C" />
        </Grid.Box>

        <Grid.Box bgColor={colors.yellow} color="#000" style={boxContentStyle}>
          <CustomTitle>Cálculo I</CustomTitle>
          <p>
            Cálculo I introduz conceitos de limites, derivadas e integrais,
            essenciais para entender taxas de mudança e acumulação em várias
            áreas, como física e economia.
          </p>
          <img src={CalculoIMG} style={imageStyle} alt="Cálculo I" />
        </Grid.Box>

        <Grid.Box style={boxContentStyle}>
          <CustomTitle>Machine Learning</CustomTitle>
          <p>
            Machine Learning é um ramo da inteligência artificial focado em
            algoritmos que aprendem e fazem previsões a partir de dados,
            aplicado em áreas como diagnóstico médico e sistemas de
            recomendação.
          </p>
          <img src={MLIMG} style={imageStyle} alt="Machine Learning" />
        </Grid.Box>

        <Grid.Box
          onClick={navigateToVisCmp}
          bgColor={colors.yellow}
          color="#000"
          style={boxContentStyle}
        >
          <CustomTitleClicable>Visão Computacional</CustomTitleClicable>
          <p>
            Visão Computacional permite que computadores interpretem o mundo
            visual, identificando objetos e cenas em imagens e vídeos, com
            aplicações em segurança, automação e análise médica.
          </p>
          <img src={VisCmpIMG} style={imageStyle} alt="Visão Computacional" />
        </Grid.Box>
      </Grid.Wrapper>
    </>
  );
}

export default HelpChat;
