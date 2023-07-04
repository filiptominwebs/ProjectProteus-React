import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <section className="home">
        <div className="home-content">
            <h1>PROTEUS <span>STUDIO</span></h1>
            <div className="work-content">
                <h3>Webové stránky</h3>
                <h3 className="mid">Fotografické práce</h3>
                <h3>Designerské práce</h3>
            </div>
            <div className="btn">
                <a href="#contact" className="action_btn">Kontaktuj nás</a>
            </div>
        </div>
    </section>
    );
  }
}
