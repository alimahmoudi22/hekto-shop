import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./styles/App.css";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
