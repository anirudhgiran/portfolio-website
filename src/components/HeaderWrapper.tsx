import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export function HeaderWrapper(){
    return <div className="container">
        <NavBar/>
        <Outlet/>
    </div>
}