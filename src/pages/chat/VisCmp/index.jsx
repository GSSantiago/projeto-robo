
import Messages from '../../../components/Messages';
import Grid from '../../../components/Gridbox';
import colors from '../../../../constants/colors';
import ProgVisCmp from "/src/img/VisCmp.png";

function VisCmpChat(){

   return(
   <>
      <Messages.Robot>
        Ótimo, você optou pelo tema de visão computacional, estou aqui para lhe oferecer assistência abrangente. Vou proporcionar uma explicação detalhada sobre
        o assunto, incluir um exemplo prático para ilustrar como ele é aplicado no mundo real e, além disso, fornecer uma seleção cuidadosa de fontes de referência. Estas 
        fontes serão úteis se você desejar explorar mais alternativas ou aprofundar seu conhecimento na área.
      </Messages.Robot>

      <Grid.Wrapper>
        <Grid.Box>
        
        <h4 style={{textAlign: 'center'}}>EXPLICAÇÃO DETALHADA:</h4>
        <p>
        A visão computacional é como o cérebro de um computador para entender imagens. Ela começa capturando fotos ou vídeos e, em seguida, as "olha" para encontrar coisas importantes. Imagine isso como uma pessoa examinando uma foto, identificando objetos e entendendo o que está acontecendo.<br /><br />
        Para fazer isso, usamos truques de computador, como limpar a imagem, destacar objetos e pegar informações importantes sobre eles. É como quando você quer encontrar algo em uma foto e usa zoom, brilho, e destaca certas partes.<br /><br />
        A visão computacional é super útil! Pode ser usada em fábricas para verificar se tudo está sendo feito direitinho, em hospitais para analisar exames médicos, em carros que dirigem sozinhos para entender o que está ao redor e até mesmo em câmeras de segurança, reconhecimento facial e em jogos com realidade aumentada. É como dar superpoderes de "ver" às máquinas!
        </p>
        </Grid.Box>

        <Grid.Box bgColor={colors.yellow} color="#000">
        <h4 style={{textAlign: 'center'}}>EXEMPLO:</h4>
        <p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', marginTop: '20px' }}>
          <img src={ProgVisCmp} style={{ width: '104%', height: 'auto', borderRadius: '10px' }} alt="Exemplo de Programação em C" />
        </div>
        </p>
        </Grid.Box>

        <Grid.Box>
            <p>
            <strong>Livros e Textos Acadêmicos:</strong>
            <br /><br />

            "Computer Vision: Algorithms and Applications" por Richard Szeliski: Um livro abrangente que cobre muitos aspectos fundamentais da visão computacional.<br />
            "Deep Learning for Computer Vision" por Rajalingappaa Shanmugamani: Oferece uma introdução prática ao uso de deep learning em tarefas de visão computacional.<br />
            <br />
            <strong>Cursos Online:</strong>
            <br /><br />
            Coursera - "Computer Vision Basics" pela Universidade de Buffalo: Um curso introdutório que aborda os conceitos básicos da visão computacional.<br />
            Udemy - "Python for Computer Vision with OpenCV and Deep Learning" por Jose Portilla: Um curso prático que ensina visão computacional usando Python e OpenCV.<br />
            <br />
            <strong>Tutoriais e Documentação:</strong>
            <br /><br />
            OpenCV Official Documentation: Um recurso valioso para aprender sobre a biblioteca OpenCV, amplamente utilizada em visão computacional.
            </p>
        </Grid.Box>

      </Grid.Wrapper>
   
   </>)

}

export default VisCmpChat;
