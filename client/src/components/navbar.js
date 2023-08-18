import { useState } from "react";
import { MenuData } from "./menuData";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./navbarStyle.css"; 

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [cookies, setCookies] = useCookies(["access_token"]);

    if(cookies.access_token) {
        const lastObject = MenuData[MenuData.length - 1];
        lastObject.title = "Logout"
    }

    const handleClick = () => {
        setClicked(!clicked);
    }
        return(
            <nav className="NavbarItems">
                <h1 className="logo">
                    ReciPro <i className="fas fa-hamburger"></i>
                </h1>

                <div className="menu-icons" onClick={handleClick}>
                    <i className={clicked? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={clicked? "nav-menu active" : "nav-menu"}>
                    {MenuData.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link to={item.url}
                                   className={item.cName}>
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        ); 
                    })}
                </ul>
            </nav>
        );
    }

export default Navbar;