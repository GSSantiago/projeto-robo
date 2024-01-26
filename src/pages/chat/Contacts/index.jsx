
import Messages from '../../../components/Messages';
import Grid from '../../../components/Gridbox';
import colors from '../../../../constants/colors';


function ContactsChat(){

   return(
   <>
      <Messages.Robot>
      Agora que você está interessado em saber mais sobre os contatos importantes no Departamento de Computação, 
      estou aqui para oferecer toda a assistência necessária. Vou fornecer uma explicação detalhada sobre quem são as pessoas-chave no departamento, 
      incluindo professores, coordenadores e assistentes administrativos, e como eles podem ajudá-lo em sua jornada acadêmica. Além disso, 
      incluirei dicas sobre como e quando se comunicar efetivamente com esses contatos.
      </Messages.Robot>

      <Grid.Wrapper>
         <Grid.Box>
         <p>
            <strong>Prof. Dr. Alan Demétrius Baria Valejo(alanvalejo(at)ufscar.br):</strong> Professor adjunto que atua na área de Ciência de Dados, Machine Learning e Análise de Redes sociais.<br />
            <strong>Prof. Dr Alexandre Levada(alexandre.levada(at)ufscar.dot.br):</strong> Professor adjunto que atua na área de Reconhecimento de Padrões, Redução de Dimensionalidade e Filtragem de Ruído.<br />
            <strong>Prof. Dr Andre R.Backes (andrebackes(at)ufscar.br):</strong> Professor associado que atua na área Processamento de Imagens, Visão Computacional e Inteligência Artificial.<br />
            <strong>Prof. Dr André Takeshi Endo (andreendo(at)ufscar.br):</strong> Professor adjunto que atua na área de Engenharia de Software, aplicações Móveis e Web e Testes Automatizados.<br />
         </p>
         </Grid.Box>

         <Grid.Box bgColor={colors.yellow} color="#000">
         <p>
            <strong>Prof. Dr Delano M. Beder(delano(at)ufscar.br):</strong> Professor associado que atua na área de Engenharia de Software e Informática na Educação.<br />
            <strong>Prof. Dr Helio C. Guardia (helio.guardia(at)ufscar.dot.br):</strong> Professor associado que atua na área de Sistemas Distribuídos e Computação de Alto Desempenho.<br />
            <strong>Profª.Dr Heloisa A. Camargo(heloisacamargo(at)ufscar.br)</strong>: Professora titular que atua na área de Aprendizado de Máquina, Sistemas Fuzzy e Aprendizado de Máquina em Fluxo de Dados.<br />
            <strong>Profª.Dr Helena M. Caseli (helenacaseli(at)ufscar.br):</strong> Professora associada que atua na área de Processamento de Linguagem Natural, Aprendizado de Máquina e Inteligência Artificial.<br />
         </p>
         </Grid.Box>

         <Grid.Box>
            <p>
            <strong>Prof Dr. Marcio Merino Fernandeds(marcio(at)ufscar):</strong> Professor associado que atua nas áreas de Arquitetura de Computadores, Sistemas Embarcados e Computação de Alto Desempenho.<br />
            <strong>Profª. Dr Joice Lee Otsuka (joice(at)ufscar.br):</strong> Professora associada que atua na área de Informática na Educação e Interação Humano Computador.<br />
            <strong>Profª. Dr Marcela X. Ribeiro (marcelaxr(at)ufscar.br):</strong> Professora associada que atua na área de Mineração e visualização de Banco de Dados.<br />
            <strong>Profª. Dr Marilde T.P. Santos (marilde.santos(at)ufscar.br):</strong> Professora associada que atua na área de Banco de Dados e Recursos Educacionais Abertos(REA).<br />
            </p>
         </Grid.Box>

         <Grid.Box bgColor={colors.yellow} color="#000">
            <p>
            <strong>Nicanor José Costa(coordec(at)ufscar.br):</strong> Secretário da Coordenação do Curso de Engenharia de Computação.<br />
            <strong>Dalila Ariana de Abreu Bernardino(coordcc):</strong> Secretária da Coordenação do Curso de Ciência da Computação.<br />
            <strong>Prof. Dr Valter V. Camargo (valtervcamargo(at)ufscar.br)</strong>: Professor associado que atua na área de Arquitetura e Design de Software e Machine learning para desenvolvimento de Software.<br />
            <strong>Profª. Dr Vânia P.A. Neris (vania.neris(at)ufscar.br):</strong> Professora associada que atua na área de Interação Humano-Computador, Computação Aplicada à Saúde e Educação em Computação.<br />
            </p>
         </Grid.Box>
      </Grid.Wrapper>
   
   </>)

}

export default ContactsChat;