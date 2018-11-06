import React from 'react';

import './Buttons.css';

const buttons = (props) => {

	const cellSize = {
		height: props.cellSize,
		width: props.cellSize
	}

	return(
		<>
			<button className="button" id="minus_top" onClick={props.dell1} style={cellSize}>&minus;</button>
			<button className="button" id="minus_left" onClick={props.dell2} style={cellSize}>&minus;</button>
			<button className="button" id="plus_right" onClick={props.add1} style={cellSize}>+</button>
			<button className="button" id="plus_bottom" onClick={props.add2} style={cellSize}>+</button>
		</>)
};

export default buttons;