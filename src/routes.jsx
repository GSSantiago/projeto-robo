import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";

import SelectionChat from "./pages/SelectionChat";
import Wrapper from "./components/Wrapper";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/chat",
    element: <Wrapper><SelectionChat/></Wrapper>
  },
]);

export default routes