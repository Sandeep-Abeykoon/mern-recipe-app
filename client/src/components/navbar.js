import { Component } from "react";
import { MenuData } from "./menuData";

console.log(MenuData);
class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1>
                    ReciPro <i className="fas fa-hamburger"></i>
                </h1>
                <ul>
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