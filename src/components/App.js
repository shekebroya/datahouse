import React, { Component } from 'react';
import Person from './Person';
import Berufserfahrung from './Berufserfahrung';
import Bildung from './Bildung';
import Kenntnisse from './Kenntnisse';
import Referenz from './Referenz';

class App extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div>
        <h1 className="center">Lebenslauf</h1>
        <Person />
        <Berufserfahrung />
        <Bildung />
        <Kenntnisse />
        <Referenz />
      </div>
    )
  }
}

export default App;
