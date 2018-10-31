import React, { Component } from 'react';
import './App.css';

import Field from './components/field/Field';
import Buttons from './components/buttons/Buttons';

class App extends Component {
	// constructor (props) {
	// 	super (props);
	// 	this.state = {
	// 		initialWidth: this.props.initialWidth,
	// 		initialHeigh: this.props.initialHeigh,
	// 		cellSize: this.props.cellSize
	// 	}
	// }
  render() {
    return (
      <div id="testTask">
				<Buttons/>
				<Field
					initialWidth = {this.props.initialWidth}
					initialHeight = {this.props.initialHeight}
					cellSize = {this.props.cellSize}
				/>
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
