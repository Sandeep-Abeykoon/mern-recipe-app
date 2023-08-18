import { Component } from "react";
import { MenuData } from "./menuData";
import "./navbarStyle.css"; 

console.log(MenuData); 
class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="logo">
                    ReciPro <i className="fas fa-hamburger"></i>
                </h1>
                <ul className="nav-menu">
                    {MenuData.map((item, index) => {
                        return(
                            <li key={index}>
                                <a href={item.url}
                                   className={item.cName}>
                                    <i className={item.icon}></i>{item.title}
                                </a>
                            </li>
                        ); 
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;