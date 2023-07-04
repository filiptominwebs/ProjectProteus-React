import React, { Component } from 'react';
import  NavMenu  from './NavMenu';
import { Home } from './Home';
import { About } from './About';
import { Service } from './Service';
import { Contact } from './Contact';
import { Footer } from './Footer'

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Home/>
        <About/>
        <Service/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}
