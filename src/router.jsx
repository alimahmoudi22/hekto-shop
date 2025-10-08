import { createBrowserRouter } from "react-router";

import AppLayout from "./ui/AppLayout";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <ShoppingCart /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);

export default router;
