import React, { Component } from 'react';
import './App.css';

import Field from './components/field/Field';
import Buttons from './components/buttons/Buttons';

class App extends Component {
	constructor (props) {
		super (props);
		this.state = {
			initialWidth: this.props.initialWidth,
			initialHeigh: this.props.initialHeigh,
			cellSize: this.props.cellSize
		}
	}

  render() {

		const dell1 = () => {console.log("del1")};
		const dell2 = () => {console.log("del2")};
		const add1 = () => {console.log("add1")};
		const add2 = () => {console.log("add2")};

    return (
      <div id="testTask">
				<Buttons
					cellSize = {this.state.cellSize}
					dell1 = {dell1}
					dell2 = {dell2}
					add1 = {add1}
					add2 = {add2}
				/>
				<Field
					initialWidth = {this.state.initialWidth}
					initialHeight = {this.state.initialHeight}
					cellSize = {this.state.cellSize}
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
