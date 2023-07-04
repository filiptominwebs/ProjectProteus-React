import React, {Component} from "react";
export class Footer extends Component{
    static displayName = Footer.name;
    render(){
        return(
            <footer>
                <ul className="social-icons">
                    <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                </ul>
                <ul className="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <p>@2023 PROTEUS | All Rights Reserved</p>
            </footer>
        );
    }
}