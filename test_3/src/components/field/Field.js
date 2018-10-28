import React, {Component} from 'react';

import './Field.css';
import Line from '../line/Line';

class Field extends Component {
	render(){
		return(
			<div id="field">
				<Line /> <Line /> <Line /> <Line />
			</div>
		)
	}
}

export default Field;