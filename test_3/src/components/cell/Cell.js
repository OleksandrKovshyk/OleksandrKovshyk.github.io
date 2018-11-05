import React from 'react';

import './Cell.css';

const cell = (props) =>	<div className='cell' style={{height: props.cellSize, width: props.cellSize}}> </div>;

export default cell;