import Messages from '../../../components/Messages';
import { MapView } from './styles';
import Mapa from "/src/img/LE1.jpg";

function MapChat() {
  return (
    <>
      <Messages.Robot>
        Ótimo, estou aqui para auxiliá-lo a se orientar. Por favor, observe o mapa fornecido abaixo. Os LE's estão identificados com nomes e números, enquanto as salas que 
        abrigam alguns funcionários estão marcadas com suas respectivas designações. Além disso, você encontrará a localização das salas de projetos de extensão, o Centro 
        Acadêmico, nosso auditório e diversas outras salas importantes!
      </Messages.Robot>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '-20px' }}>
        <img src={Mapa} style={{ width: '75%', height: 'auto' }} alt="Mapa" />
      </div>
      <MapView></MapView>
    </>
  );
}

export default MapChat;
