import Messages from "../../../components/Messages";
import Grid from "../../../components/Gridbox";
import colors from "../../../../constants/colors";
import CalculusExample from "/src/img/CalculusExample.png"; // Substitua pelo caminho correto da imagem

function Calculo1Chat() {
  return (
    <>
      <Messages.Robot>
        Explorar Cálculo 1 é embarcar em uma jornada fascinante pelo mundo da
        matemática! Vou te proporcionar uma visão geral, apresentar um exemplo
        prático e indicar recursos para você mergulhar ainda mais fundo nesse
        campo.
      </Messages.Robot>

      <Grid.Wrapper>
        <Grid.Box>
          <h4 style={{ textAlign: "center" }}>EXPLICAÇÃO DETALHADA:</h4>
          <p>
            Cálculo 1 é o estudo dos conceitos fundamentais de limite, derivada
            e integral. Esses conceitos são a base para entender as taxas de
            variação e a área sob curvas, respectivamente.
            <br />
            O limite ajuda a entender o comportamento de funções à medida que se
            aproximam de um ponto específico. A derivada é uma ferramenta
            poderosa para analisar a taxa de mudança instantânea de uma função.
            A integral, inversamente, permite calcular a área acumulada sob a
            curva de uma função.
            <br />
            Esses conceitos são aplicados em diversas áreas, como física,
            engenharia, economia e biologia, demonstrando a importância e a
            versatilidade do Cálculo 1.
          </p>
        </Grid.Box>

        <Grid.Box bgColor={colors.green} color="#fff">
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
                src={CalculusExample}
                style={{ width: "104%", height: "auto", borderRadius: "10px" }}
                alt="Exemplo de Cálculo 1"
              />
            </div>
          </p>
        </Grid.Box>

        <Grid.Box>
          <p>
            <strong>Livros:</strong>
            <br />
            <br />
            “Cálculo - Volume 1” por James Stewart: Uma introdução clássica que
            abrange os conceitos fundamentais de Cálculo 1.
            <br />
            “Cálculo com Geometria Analítica” por Earl W. Swokowski: Um livro
            que explora o cálculo juntamente com aplicações práticas na
            geometria analítica.
            <br />
            <br />
            <strong>Cursos Online:</strong>
            <br />
            <br />
            Coursera - “Cálculo Diferencial e Integral para Engenharia e
            Ciências” pela Universidade de São Paulo: Um curso introdutório
            abrangente sobre os conceitos básicos de Cálculo 1.
            <br />
            Khan Academy - “Cálculo”: Uma série de vídeos e exercícios que
            cobrem desde os fundamentos até tópicos mais avançados de Cálculo.
            <br />
          </p>
        </Grid.Box>
      </Grid.Wrapper>
    </>
  );
}

export default Calculo1Chat;
