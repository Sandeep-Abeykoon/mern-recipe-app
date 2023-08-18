import { Component } from "react";

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1>
                    ReciPro <i className="fas fa-hamburger"></i>
                </h1>
                <ul>
                    <li>
                        <i className="fa-solid fa-house-user"></i>
                        <a href="./pages/home.js">Home</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;