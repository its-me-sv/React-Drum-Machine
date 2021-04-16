import React, {useState} from 'react';
import '../index.css';
import KeysBox from '../Components/keysBox.js';
import MenuBox from '../Components/menuBox.js';
import initialState from '../Constants/initialState.js';
import {drums, piano} from '../Constants/sourceState.js';

function App() {
	const [state, setState] = useState({power: true, infoBox: "drums", bank: "drums"});

	function helper(e) {
		playSound(e.keyCode);
	}

	function togglePower() {
		if (state.power === false)
			setState({power: true, infoBox: "drums", bank: "drums"});
		else
			setState(initialState);
	}

	function toggleBank() {
		if (state.power === true) {
			let temp = state.bank === "drums" ? "piano" : "drums";
			setState({...state, ...{bank: temp, infoBox: temp}});
		}
	}

	function updateInfoBox(value){
		setState({...state, ...{infoBox: value}});
	}

	let requiredBank = state.bank === "drums" ? drums : piano;
	let keyIndiceMap = {81:0, 87:1, 69:2, 65:3, 83:4, 68: 5, 90: 6, 88:7, 67:8};
	function playSound(kc){
		if (state.power === false)
			return;
		if (keyIndiceMap[kc] === undefined){
			return;
		}
		let audio = document.getElementById(String.fromCharCode(kc));
		updateInfoBox(requiredBank[keyIndiceMap[kc]].id);
		audio.currentTime = 0;
		audio.volume = 0.5;
		audio.play();
	}

	return (
	    <div id="drum-machine">
	      <h1>Music Locker</h1>
	      <div className="container">
	        <KeysBox 
	        	power={state.power}
	        	bank={state.bank}
	        	updateInfo={updateInfoBox}
	        	playSound={playSound}
	        	requiredBank={requiredBank}
	        	helper={helper}
	        />
	        <MenuBox
	        	power={state.power}
	        	powerSwitch={togglePower} 
	        	bankSwitch={toggleBank} 
	        	info={state.infoBox}
	        />
	      </div>
	    </div>
	  );
}

export default App;