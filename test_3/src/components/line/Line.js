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

	// const cells = (initialWidth) => {
	// 	let line = [];
	//
	// 	for (let i = 0; i < initialWidth)
	//
	//
	//
	// }

	render(){
		return (
				<div>
					{/*{this.cells}*/}
					<Cell/>
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

