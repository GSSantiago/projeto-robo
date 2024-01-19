import { BottomView, TopView } from './styles';
import Text from '../../components/Text';
import Button from '../../components/Button';

function Home({navigation}){

    const goToSelection = () => navigation.goTo('Selection');
   
   return(<>
        <TopView>
            <Text size="4%">Olá, sou o seu amigão do DC e posso te ajudar!</Text>
        </TopView>
        <BottomView>
            <Text size="3%" color="#3E1F62">Eu adoraria conversar com você e te conhecer melhor</Text>
            <Text size="4%" color="#3E1F62" bold>Bora lá?</Text>
            <Button onPress={goToSelection}>Prosseguir</Button>
        </BottomView>

   </>)

}

export default Home;