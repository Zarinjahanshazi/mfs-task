import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element:<Registration></Registration>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
      ]
    },
  ]);
