import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import FeatureItemComponent from './components/feature-item/feature-item.component';

class App extends Component {
  render() {
    return (
      <div>
          <HeaderComponent />
          <FeatureItemComponent />
          <FooterComponent />
      </div>
    );
  }
}

export default App;
