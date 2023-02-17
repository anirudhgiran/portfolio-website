import { Outlet } from "react-router-dom";
import { LinkStack } from "./LinkStack";
import { NavBar } from "./NavBar";
import { ThemeBtn } from "./ThemeBtn";

export function HeaderWrapper() {
    return <div className="container">
        <NavBar />
        <ThemeBtn />
        <LinkStack />
        <Outlet />
    </div>
}