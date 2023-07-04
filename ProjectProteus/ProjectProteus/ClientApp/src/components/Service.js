import React, {Component} from "react";
export class Service extends Component{
    static displayName = Service.name;
    render(){
        return(
            <div className="services">
                <div class="heading">
                    <h1>Naše služby</h1>
                </div>
                <div className="container reveal">
                    <div className="box">
                        <div className="content">
                            <div className="icon"><ion-icon name="brush-outline"></ion-icon></div>
                            <div className="text">
                                <h3>Designing</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, qui.</p>
                                <a href="#contact">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content">
                            <div className="icon"><ion-icon name="code-slash-outline"></ion-icon></div>
                            <div className="text">
                                <h3>Websites</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, qui.</p>
                                <a href="#contact">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content">
                            <div className="icon"><ion-icon name="camera-outline"></ion-icon></div>
                            <div className="text">
                                <h3>Multimedia</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, qui.</p>
                                <a href="#contact">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}