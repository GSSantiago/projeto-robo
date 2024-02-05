import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import Wrapper from "./components/Wrapper";

import SelectionChat from "./pages/chat/Selection";
import MapChat from "./pages/chat/Map";
import HelpChat from "./pages/chat/Help";
import FeelingsChat from "./pages/chat/Feelings";
import ContactsChat from "./pages/chat/Contacts";
import LinguagemC from "./pages/chat/LinguagemC";
import VisCmp from "./pages/chat/VisCmp";
import EmotionChat from "./pages/chat/Emotion";
import Calculo1Chat from "./pages/chat/Calculo";
import MachineLearningChat from "./pages/chat/MachineLearning";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: (
      <Wrapper>
        <SelectionChat />
      </Wrapper>
    ),
  },
  {
    path: "/map",
    element: (
      <Wrapper>
        <MapChat />
      </Wrapper>
    ),
  },
  {
    path: "/help",
    element: (
      <Wrapper>
        <HelpChat />
      </Wrapper>
    ),
  },
  {
    path: "/feelings",
    element: (
      <Wrapper>
        <FeelingsChat />
      </Wrapper>
    ),
  },
  {
    path: "/feelings/:emotion",
    element: (
      <Wrapper>
        <EmotionChat />
      </Wrapper>
    ),
  },
  {
    path: "/contacts",
    element: (
      <Wrapper>
        <ContactsChat />
      </Wrapper>
    ),
  },
  {
    path: "/Linguagem-c",
    element: (
      <Wrapper>
        <LinguagemC />
      </Wrapper>
    ),
  },
  {
    path: "/VisCmp",
    element: (
      <Wrapper>
        <VisCmp />
      </Wrapper>
    ),
  },

  {
    path: "/Calculo",
    element: (
      <Wrapper>
        <Calculo1Chat />
      </Wrapper>
    ),
  },

  {
    path: "/MachineLearning",
    element: (
      <Wrapper>
        <MachineLearningChat />
      </Wrapper>
    ),
  },
]);

export default routes;
