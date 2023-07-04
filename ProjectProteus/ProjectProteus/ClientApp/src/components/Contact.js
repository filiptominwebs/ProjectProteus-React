import React, {Component} from "react";
export class Contact extends Component{
    static displayName = Contact.name;
    render(){
        return(
            <div>
                <div class="heading">
                    <h1>Kontaktuj  nás!</h1>
                </div>
                <section class="contact"> 
                    <div class="container">
                        <div class="content">
                            <div class="left-side">
                                <div class="adress details">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="topic">Adresa</div>
                                    <div class="text-one">Liberec, Česká republika</div>
                                    <div class="text-two">Vlnařská 688</div>
                                </div>
                                <div class="phone  details">
                                    <i class="fas fa-phone-alt"></i>
                                    <div class="topic">Telefon</div>
                                    <div class="text-one">+420 702 125 740</div>
                                    <div class="text-two">+420 123 456 789</div>
                                </div>
                                <div class="email details">
                                    <i class="fas fa-envelope"></i>
                                    <div class="topic">Email</div>
                                    <div class="text-one">developer@proteus.cz</div>
                                </div>
                            </div>
                            <div class="right-side">
                                <div class="topic-text">Napiš nám!</div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, qui.</p>
                            
                                <form action="#">
                                    <div class="input-box">
                                        <input type="text" placeholder="Napiš své jméno"/>
                                    </div>
                                    <div class="input-box">
                                        <input type="text" placeholder="Napiš svůj email"/>
                                    </div>
                                    <div class="input-box">
                                        <input type="" placeholder="Napiš svůj telefon"/>
                                    </div>
                                    <div class="input-box message box">
                                        <textarea placeholder="Tvoje zpráva"></textarea>
                                    </div>
                                    <div class="btn">
                                        <a href="#home" class="action_btn">Odeslat</a>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
        );
    }
}