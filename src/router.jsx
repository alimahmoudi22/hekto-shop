import { createBrowserRouter } from "react-router";

import AppLayout from "./ui/AppLayout";

import Home from "./pages/Home";
import Shop from "./pages/Shop";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
]);

export default router;
