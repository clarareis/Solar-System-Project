import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1><Header /></h1>
        <p><SolarSystem /></p>
      </div>
    );
  }
}

export default App;
