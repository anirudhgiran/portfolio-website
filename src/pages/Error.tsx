import { Link } from "react-router-dom";

export function Error(){
    return <>
        <p>Error: Page not found</p>
        <Link to="/">Home</Link>
    </>
}