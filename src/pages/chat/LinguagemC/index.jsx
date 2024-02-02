
import Messages from '../../../components/Messages';
import Grid from '../../../components/Gridbox';
import colors from '../../../../constants/colors';
import ProgC from "/src/img/ProgC.png";

function LinguagemCChat(){

   return(
   <>
      <Messages.Robot>
        Certamente, agora que você escolheu explorar a linguagem C, estou aqui para oferecer uma explicação detalhada. Incluindo um exemplo prático e recomendações de    
        fontes para aprofundar seus conhecimentos na área.
      </Messages.Robot>

      <Grid.Wrapper>
        <Grid.Box>
        
        <h4 style={{textAlign: 'center'}}>EXPLICAÇÃO DETALHADA:</h4>
        <p>
        A linguagem C é fundamental para o desenvolvimento eficiente de programas de computador, abrangendo a criação, compilação e execução.<br />
        Proporciona controle preciso sobre o hardware, permitindo manipulação direta de memória. A programação em C envolve a definição de estruturas de dados, algoritmos eficientes e gestão manual de memória.<br />
        Essa linguagem é crucial para a programação e desenvolvimento de software, servindo como base para muitas outras linguagens. Sua aplicação varia de sistemas embarcados a software de sistema operacional, destacando-se pela eficiência e flexibilidade em projetos de baixo nível e tempo real.
        </p>
        </Grid.Box>

        <Grid.Box bgColor={colors.yellow} color="#000">
        <h4 style={{textAlign: 'center'}}>EXEMPLO:</h4>
        <p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', marginTop: '20px' }}>
          <img src={ProgC} style={{ width: '104%', height: 'auto', borderRadius: '10px' }} alt="Exemplo de Programação em C" />
          </div>

        </p>
        </Grid.Box>

        <Grid.Box>
            <p>
            <strong>Livros:</strong>
            <br /><br />

            “O manual do iniciante em C: aprenda o básico sobre a linguagem de programação C em apenas algumas horas” por Flavio Copes: Um livro abrangente que cobre muitos aspectos fundamentais da linguagem.<br />
            “Linguagem C: o que é e quais os principais fundamentos!” por Trybe: Oferece uma introdução prática à linguagem.<br />
            <br />
            <strong>Cursos Online:</strong>
            <br /><br />
            Udemy - “Linguagem C - direto ao ponto” por Jones Granatyr: Um curso prático que ensina linguagem.<br />
            Coursera - “Programação em C” pela Universidade de São Paulo: Um curso introdutório que aborda os conceitos básicos da linguagem.<br />
            </p>
        </Grid.Box>

      </Grid.Wrapper>
   
   </>)

}

export default LinguagemCChat;
