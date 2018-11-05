import React, {Component} from 'react';

import Cell from '../cell/Cell';

// let cell =[];
//
// for (let i = 0; i)


class Line extends Component {

	constructor(props) {
		super(props);
			this.state = {
			initialWidth: this.props.initialWidth,
			cellSize: this.props.cellSize
		};
	}

	// const line = (this.state.initialWidth) => {
	// 	let cells = [];
	//
	// 	for (let i = 0; i < this.state.initialWidth; i++){
	// 		cells.push(<Cell/>)
	// 	}
	//
	// }

	render(){
		return (
				<div>
					{/*{this.cells}*/}
					<Cell
						cellSize = {this.state.cellSize}
					/>

					{console.log(" Line " +
						"initialWidth: " +
						this.state.initialWidth +
						" cellSize: " +
						this.state.cellSize)}
				</div>
		)
	}
}

export default Line;

