import React, {Component} from 'react';

import './Field.css';
import Line from '../line/Line';

class Field extends Component {

	constructor(props) {
		super(props);
		this.state = {
			initialWidth: this.props.initialWidth,
			initialHeight: this.props.initialHeight,
			cellSize: this.props.cellSize
		};
	}


	render(){

		return(
			<div id="field">
				<Line
					initialWidth = {this.state.initialWidth}
					cellSize = {this.state.cellSize}
				/>
				{console.log(" Field " +
					"initialWidth: " +
					this.props.initialWidth +
					" cellSize: " +
					this.props.cellSize)}
			</div>
		)
	}
}

export default Field;