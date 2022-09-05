import {Outlet, NavLink} from "react-router-dom";
const Layout = () =>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/"> Home</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
};

export default Layout;