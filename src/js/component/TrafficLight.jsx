import React from "react";
import {useState} from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState('red');

	const handleClick = (selectedColor) => {
		setColor(selectedColor);
	}
	return (
		<div className="box">
			<div id="trafficTop" className="d-flex"></div>
			<div className= "container">
				<div id="redLight" className={`light red ${color === 'red' ? 'selected' : ''}`}
				onClick={() => handleClick('red')}
					></div>
				<div id="yellowLight" className={`light yellow ${color === 'yellow' ? 'selected' : ''}`}
				onClick={() => handleClick('yellow')}
					></div>
				<div id="greenLight" className={`light green ${color === 'green' ? 'selected' : ''}`}
				onClick={() => handleClick('green')}
					></div>
			</div>
		</div>
	);
};

ReactDOM.render(<TrafficLight/>, document.getElementById('app'));
export default TrafficLight;
