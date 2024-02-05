import Messages from "../../../components/Messages";
import Grid from "../../../components/Gridbox";
import colors from "../../../../constants/colors";
import MLExample from "/src/img/MLimg.jpg"; // Substitua pelo caminho correto da imagem

function MachineLearningChat() {
  return (
    <>
      <Messages.Robot>
        Excelente escolha em querer saber mais sobre Machine Learning! Vou te
        fornecer uma visão geral, um exemplo prático e algumas fontes para você
        se aprofundar ainda mais.
      </Messages.Robot>

      <Grid.Wrapper>
        <Grid.Box>
          <h4 style={{ textAlign: "center" }}>EXPLICAÇÃO DETALHADA:</h4>
          <p>
            Machine Learning é um ramo da inteligência artificial que se
            concentra no desenvolvimento de sistemas capazes de aprender e
            melhorar a partir de experiências sem serem explicitamente
            programados para isso.
            <br />
            Utiliza algoritmos para analisar dados, aprender com eles e fazer
            previsões ou tomar decisões baseadas em informações. É amplamente
            aplicado em reconhecimento de fala, recomendação de produtos,
            previsões financeiras e muito mais.
            <br />O aprendizado pode ser supervisionado, não supervisionado,
            semi-supervisionado ou por reforço, dependendo da natureza dos dados
            e do objetivo específico.
          </p>
        </Grid.Box>

        <Grid.Box bgColor={colors.blue} color="#fff">
          <h4 style={{ textAlign: "center" }}>EXEMPLO:</h4>
          <p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                height: "100vh",
                marginTop: "20px",
              }}
            >
              <img
                src={MLExample}
                style={{ width: "104%", height: "auto", borderRadius: "10px" }}
                alt="Exemplo de Machine Learning"
              />
            </div>
          </p>
        </Grid.Box>

        <Grid.Box>
          <p>
            <strong>Livros:</strong>
            <br />
            <br />
            “Aprendizado de Máquina” por Ethem Alpaydin: Uma introdução
            abrangente ao campo do aprendizado de máquina.
            <br />
            “Deep Learning” por Ian Goodfellow, Yoshua Bengio e Aaron Courville:
            Um livro profundo sobre aprendizado profundo, uma subárea do machine
            learning.
            <br />
            <br />
            <strong>Cursos Online:</strong>
            <br />
            <br />
            Coursera - “Machine Learning” por Andrew Ng: Um curso introdutório
            que cobre os fundamentos do machine learning.
            <br />
            Udacity - “Nanodegree Engenheiro de Machine Learning”: Um programa
            abrangente que ensina técnicas avançadas de machine learning.
            <br />
          </p>
        </Grid.Box>
      </Grid.Wrapper>
    </>
  );
}

export default MachineLearningChat;
