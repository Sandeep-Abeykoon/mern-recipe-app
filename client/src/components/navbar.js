import { Component } from "react";
import { MenuData } from "./menuData";
import "./navbarStyle.css"; 

console.log(MenuData); 
class Navbar extends Component{

    state = {clicked: false};

    handleClick =() => {
        this.setState({ clicked:!this.state.clicked })
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="logo">
                    ReciPro <i className="fas fa-hamburger"></i>
                </h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

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