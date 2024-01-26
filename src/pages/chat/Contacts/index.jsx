import Messages from "../../../components/Messages";
import Grid from "../../../components/Gridbox";
import colors from "../../../../constants/colors";
import styled from "styled-components";

const Paragraph = styled.p`
  margin: 5px 0;
  line-height: 1.5;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

function ContactsChat() {
  return (
    <>
      <Messages.Robot>
        Agora que você está interessado em saber mais sobre os contatos
        importantes no Departamento de Computação, estou aqui para oferecer toda
        a assistência necessária. Vou fornecer uma explicação detalhada sobre
        quem são as pessoas-chave no departamento, incluindo professores,
        coordenadores e assistentes administrativos, e como eles podem ajudá-lo
        em sua jornada acadêmica. Além disso, incluirei dicas sobre como e
        quando se comunicar efetivamente com esses contatos.
      </Messages.Robot>

      <Grid.Wrapper>
        <Grid.Box>
          <Paragraph>
            <Strong>
              Prof. Dr. Alan Demétrius Baria Valejo (alanvalejo(at)ufscar.br):
            </Strong>{" "}
            Professor adjunto que atua na área de Ciência de Dados, Machine
            Learning e Análise de Redes sociais.
            <br />
            <Strong>
              Prof. Dr Alexandre Levada (alexandre.levada(at)ufscar.dot.br):
            </Strong>{" "}
            Professor adjunto que atua na área de Reconhecimento de Padrões,
            Redução de Dimensionalidade e Filtragem de Ruído.
            <br />
            <Strong>
              Prof. Dr Andre R.Backes (andrebackes(at)ufscar.br):
            </Strong>{" "}
            Professor associado que atua na área Processamento de Imagens, Visão
            Computacional e Inteligência Artificial.
            <br />
            <Strong>
              Prof. Dr André Takeshi Endo (andreendo(at)ufscar.br):
            </Strong>{" "}
            Professor adjunto que atua na área de Engenharia de Software,
            aplicações Móveis e Web e Testes Automatizados.
            <br />
          </Paragraph>
        </Grid.Box>

        <Grid.Box bgColor={colors.yellow} color="#000">
          <Paragraph>
            <Strong>Prof. Dr Delano M. Beder (delano(at)ufscar.br):</Strong>{" "}
            Professor associado que atua na área de Engenharia de Software e
            Informática na Educação.
            <br />
            <Strong>
              Prof. Dr Helio C. Guardia (helio.guardia(at)ufscar.dot.br):
            </Strong>{" "}
            Professor associado que atua na área de Sistemas Distribuídos e
            Computação de Alto Desempenho.
            <br />
            <Strong>
              Profª. Dr Heloisa A. Camargo (heloisacamargo(at)ufscar.br):
            </Strong>{" "}
            Professora titular que atua na área de Aprendizado de Máquina,
            Sistemas Fuzzy e Aprendizado de Máquina em Fluxo de Dados.
            <br />
            <Strong>
              Profª. Dr Helena M. Caseli (helenacaseli(at)ufscar.br):
            </Strong>{" "}
            Professora associada que atua na área de Processamento de Linguagem
            Natural, Aprendizado de Máquina e Inteligência Artificial.
            <br />
          </Paragraph>
        </Grid.Box>

        <Grid.Box>
          <Paragraph>
            <Strong>
              Prof Dr. Marcio Merino Fernandeds (marcio(at)ufscar):
            </Strong>{" "}
            Professor associado que atua nas áreas de Arquitetura de
            Computadores, Sistemas Embarcados e Computação de Alto Desempenho.
            <br />
            <Strong>
              Profª. Dr Joice Lee Otsuka (joice(at)ufscar.br):
            </Strong>{" "}
            Professora associada que atua na área de Informática na Educação e
            Interação Humano Computador.
            <br />
            <Strong>
              Profª. Dr Marcela X. Ribeiro (marcelaxr(at)ufscar.br):
            </Strong>{" "}
            Professora associada que atua na área de Mineração e visualização de
            Banco de Dados.
            <br />
            <Strong>
              Profª. Dr Marilde T.P. Santos (marilde.santos(at)ufscar.br):
            </Strong>{" "}
            Professora associada que atua na área de Banco de Dados e Recursos
            Educacionais Abertos(REA).
            <br />
          </Paragraph>
        </Grid.Box>

        <Grid.Box bgColor={colors.yellow} color="#000">
          <Paragraph>
            <Strong>Nicanor José Costa (coordec(at)ufscar.br):</Strong>{" "}
            Secretário da Coordenação do Curso de Engenharia de Computação.
            <br />
            <Strong>Dalila Ariana de Abreu Bernardino (coordcc):</Strong>{" "}
            Secretária da Coordenação do Curso de Ciência da Computação.
            <br />
            <Strong>
              Prof. Dr Valter V. Camargo (valtervcamargo(at)ufscar.br):
            </Strong>{" "}
            Professor associado que atua na área de Arquitetura e Design de
            Software e Machine learning para desenvolvimento de Software.
            <br />
            <Strong>
              Profª. Dr Vânia P.A. Neris (vania.neris(at)ufscar.br):
            </Strong>{" "}
            Professora associada que atua na área de Interação
            Humano-Computador, Computação Aplicada à Saúde e Educação em
            Computação.
            <br />
          </Paragraph>
        </Grid.Box>
      </Grid.Wrapper>
    </>
  );
}

export default ContactsChat;
