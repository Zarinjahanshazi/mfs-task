import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Login from "../Authentication/Login";
import Home from "../Home/Home";
import SignUp from "../Authentication/SignUp";
export const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[
        {
path:"/",
element:<Home/>,
loader:()=>fetch(`https://scic-server-kappa.vercel.app/products`)
        }
     
      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signUp",
      element:<SignUp/>
    }
  ]);