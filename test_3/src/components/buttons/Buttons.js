import React from 'react';

import './Buttons.css';

const buttons = (props) => {
	const dell1 = () => {console.log("del1")};
	const dell2 = () => {console.log("del2")};
	const add1 = () => {console.log("add1")};
	const add2 = () => {console.log("add2")};

	const cellSize = {
		height: props.cellSize,
		width: props.cellSize
	}

	return(
		<>
			<button className="button" id="minus_top" onClick={dell1} style={cellSize}>&minus;</button>
			<button className="button" id="minus_left" onClick={dell2} style={cellSize}>&minus;</button>
			<button className="button" id="plus_right" onClick={add1} style={cellSize}>+</button>
			<button className="button" id="plus_bottom" onClick={add2} style={cellSize}>+</button>
		</>)
};

export default buttons;