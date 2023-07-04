import React, { Component } from 'react';
export class About extends Component{
    static displayName = About.name;
    render(){
        return(
            <section class="about">
                <div class="heading">
                    <h1>O nás</h1>
                </div>
                <div class="about-us">
                    <img alt=''/>
                    <div class="about-content">
                        <h2>Náš příběh</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque ipsum. Proin in tellus sit amet nibh dignissim sagittis. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.</p>
                        <h2>Sleduj nás</h2>
                        <div class="social-media">
                            <ul class="social-icons">
                                <li><a href="https://www.instagram.com"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.facebook.com"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.twitter.com"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}