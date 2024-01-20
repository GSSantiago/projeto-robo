import { BottomWrapper, TopWrapper, SpanWrapper } from './styles';
import Text from '../../components/Text';
import Button from '../../components/Button';

function Home(){

   
   return(<>
        <TopWrapper>
            <Text size="4em" weight="700">Olá, sou o seu amigão do DC e posso te ajudar!</Text>
        </TopWrapper>
        <BottomWrapper>
            <SpanWrapper>
                <Text size="2.5em" color="#3E1F62" weight="600">Eu adoraria conversar com você e te conhecer melhor</Text>
                <Text size="4em" color="#3E1F62" weight="600">Bora lá?</Text>

            </SpanWrapper>
            <Button>Prosseguir</Button>
        </BottomWrapper>


   </>)

}

export default Home;