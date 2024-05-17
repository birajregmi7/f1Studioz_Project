import React from "react";
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./components/home/Home";
import Configure from "./components/configure/Configure";
import LayoutPage from "./components/LayoutPage";
import Cart from "./components/cart/Cart";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";
import AllForms from "./components/forms/AllForms";
import MultiForm from './components/forms/MultiForms'
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/configure",
          element: <Configure />,
        },
        {
          path: "/selection",
          element: <AllForms />,
        },
        {
          path: "/multiform",
          element: < MultiForm/>,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </Provider>
    </>
  );
};

export default App;
