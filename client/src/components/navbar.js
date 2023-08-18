import { Component } from "react";
import { MenuData } from "./menuData";

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
                            <li>
                                <i className="fa-solid fa-house-user"></i>
                                <a href="./pages/home.js">Home</a>
                            </li>
                        ); 
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;