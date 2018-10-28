import React, { Component } from 'react';
import './App.css';

import Field from './components/field/Field';
import Buttons from './components/buttons/Buttons';

class App extends Component {
  render() {
    return (
      <div id="testTask">
				<Buttons/>
				<Field/>
      </div>
    )
  }
}

App.defaultProps = {
  initialWidth: 4,
  initialHeight: 4,
  cellSize: 50
};

export default App;
