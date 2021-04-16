import React from 'react';
import '../index.css';

function MenuBox({power, powerSwitch, bankSwitch, info}) {
	let powerClass = power === true ? "power-on" : "power-off";
	return (
		<div className="menuBox">
			<button className={`top-adjust ${powerClass}`} onClick={powerSwitch}>Power</button>
			<p id="display">{info}</p>
			<button className={`bottom-adjust ${info}`} onClick={bankSwitch}>Bank</button>
		</div>
	);
}

export default MenuBox;