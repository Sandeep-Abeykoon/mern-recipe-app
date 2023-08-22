import { useState } from "react";
import { MenuData } from "./menuData";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./navbarStyle.css"; 

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [cookies, setCookies] = useCookies(["access_token"]);

    const lastObject = MenuData[MenuData.length - 1];

    if(cookies.access_token) {
        lastObject.title = "Logout"
    }

    const logout = () => {
        if(cookies.access_token) {
            setCookies("access_token", "");
            window.localStorage.removeItem("userID");
            lastObject.title = "Login/Signup"
        }
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
                        if (item.title === "Saved Recipes" && !cookies.access_token) {
                            return null;
                        }
                        return(
                            <li key={index}>
                                <Link to={item.url}
                                   className={item.cName}
                                   onClick={(index === MenuData.length - 1) ? logout : null}>
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