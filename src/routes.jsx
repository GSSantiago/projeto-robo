import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";

import Wrapper from './components/Wrapper'

import SelectionChat from "./pages/chat/Selection";
import MapChat from "./pages/chat/Map";
import HelpChat from "./pages/chat/Help";
import FeelingsChat from "./pages/chat/Feelings";
import ContactsChat from "./pages/chat/Contacts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/chat",
    element: <Wrapper><SelectionChat/></Wrapper>,
  },
  {
    path: "/map",
    element: <Wrapper><MapChat/></Wrapper>
  },
  {
    path: "/help",
    element: <Wrapper><HelpChat/></Wrapper>
  },
  {
    path: "/feelings",
    element: <Wrapper><FeelingsChat/></Wrapper>
  },
  {
    path: "/contacts",
    element: <Wrapper><ContactsChat/></Wrapper>
  },


]);

export default routes