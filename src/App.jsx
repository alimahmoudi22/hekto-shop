import { RouterProvider } from "react-router/dom";
import router from "./router";

import "./styles/App.css";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
