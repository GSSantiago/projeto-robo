
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
            <strong>Dr. João Martins (joao.martins@deptocomp.edu):</strong> Assistente administrativo, seu contato é vital para questões administrativas e logísticas.<br />
            <strong>Dr. Rafael Torres (rafael.torres@deptocomp.edu):</strong> Coordenador de estágios, é a pessoa de contato para alunos interessados em oportunidades de estágio e orientação profissional.<br />
            <strong>Prof. Carlos Silva (carlos.silva@deptocomp.edu):</strong> Especialista em Inteligência Artificial, conhecido por sua abordagem prática e disponibilidade para orientar projetos de alunos.<br />
            <strong>Prof. Marcos Rocha (marcos.rocha@deptocomp.edu):</strong> Especializado em Redes de Computadores, é conhecido por sua habilidade em explicar conceitos complexos de forma clara.<br />
         </p>
         </Grid.Box>

         <Grid.Box bgColor={colors.yellow} color="#000">
         <p>
            <strong>Dr. João Martins (joao.martins@deptocomp.edu):</strong> Assistente administrativo, seu contato é vital para questões administrativas e logísticas.<br />
            <strong>Dr. Rafael Torres (rafael.torres@deptocomp.edu):</strong> Coordenador de estágios, é a pessoa de contato para alunos interessados em oportunidades de estágio e orientação profissional.<br />
            <strong>Prof. Carlos Silva (carlos.silva@deptocomp.edu)</strong>: Especialista em Inteligência Artificial, conhecido por sua abordagem prática e disponibilidade para orientar projetos de alunos.<br />
            <strong>Profª. Ana Pereira (ana.pereira@deptocomp.edu):</strong> Coordenadora do curso, oferece suporte acadêmico e orientação sobre a estrutura do curso e oportunidades de pesquisa.<br />
         </p>
         </Grid.Box>

         <Grid.Box>
            <p>
            <strong>Dr. João Martins (joao.martins@deptocomp.edu):</strong> Assistente administrativo, seu contato é vital para questões administrativas e logísticas.<br />
            <strong>Dr. Rafael Torres (rafael.torres@deptocomp.edu):</strong> Coordenador de estágios, é a pessoa de contato para alunos interessados em oportunidades de estágio e orientação profissional.<br />
            <strong>Prof. Carlos Silva (carlos.silva@deptocomp.edu):</strong> Especialista em Inteligência Artificial, conhecido por sua abordagem prática e disponibilidade para orientar projetos de alunos.<br />
            <strong>Prof. Marcos Rocha (marcos.rocha@deptocomp.edu):</strong> Especializado em Redes de Computadores, é conhecido por sua habilidade em explicar conceitos complexos de forma clara.<br />
            </p>
         </Grid.Box>

         <Grid.Box bgColor={colors.yellow} color="#000">
            <p>
            <strong>Dr. João Martins (joao.martins@deptocomp.edu):</strong> Assistente administrativo, seu contato é vital para questões administrativas e logísticas.<br />
            <strong>Dr. Rafael Torres (rafael.torres@deptocomp.edu):</strong> Coordenador de estágios, é a pessoa de contato para alunos interessados em oportunidades de estágio e orientação profissional.<br />
            <strong>Prof. Carlos Silva (carlos.silva@deptocomp.edu)</strong>: Especialista em Inteligência Artificial, conhecido por sua abordagem prática e disponibilidade para orientar projetos de alunos.<br />
            <strong>Profª. Ana Pereira (ana.pereira@deptocomp.edu):</strong> Coordenadora do curso, oferece suporte acadêmico e orientação sobre a estrutura do curso e oportunidades de pesquisa.<br />
            </p>
         </Grid.Box>
      </Grid.Wrapper>
   
   </>)

}

export default ContactsChat;