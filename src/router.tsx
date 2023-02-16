import { createBrowserRouter } from "react-router-dom";
import {Home} from "./pages/Home";
import {Error} from "./pages/Error";
import { NavBar } from "./components/NavBar";
import { HeaderWrapper } from "./components/HeaderWrapper";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HeaderWrapper/>,
        children: [
            {
                element: <NavBar/>
            },
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "*",
                element: <Error/>
            }
        ]
    }
])