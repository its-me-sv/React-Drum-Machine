import React, {useEffect} from 'react';
import '../index.css';

function KeysBox({power, bank, playSound, requiredBank, helper}) {
	useEffect(() => {
		document.addEventListener('keydown', helper);
		return () => {
			document.removeEventListener('keydown', helper);
		};
	});
	return (
		<div className="pad-bank">
			<div className="drum-pad" id={requiredBank[0].id} onClick={() => playSound(81)}>
				<audio className="clip" id="Q" src={requiredBank[0].url}></audio>
				Q
			</div>
			<div className="drum-pad" id={requiredBank[1].id} onClick={() => playSound(87)}>
				<audio className="clip" id="W" src={requiredBank[1].url}></audio>
				W
			</div>
			<div className="drum-pad" id={requiredBank[2].id} onClick={() => playSound(69)}>
				<audio className="clip" id="E" src={requiredBank[2].url}></audio>
				E
			</div>
			<div className="drum-pad" id={requiredBank[3].id} onClick={() => playSound(65)}>
				<audio className="clip" id="A" src={requiredBank[3].url}></audio>
				A
			</div>
			<div className="drum-pad" id={requiredBank[4].id} onClick={() => playSound(83)}>
				<audio className="clip" id="S" src={requiredBank[4].url}></audio>
				S
			</div>
			<div className="drum-pad" id={requiredBank[5].id} onClick={() => playSound(68)}>
				<audio className="clip" id="D" src={requiredBank[5].url}></audio>
				D
			</div>
			<div className="drum-pad" id={requiredBank[6].id} onClick={() => playSound(90)}>
				<audio className="clip" id="Z" src={requiredBank[6].url}></audio>
				Z
			</div>
			<div className="drum-pad" id={requiredBank[7].id} onClick={() => playSound(88)}>
				<audio className="clip" id="X" src={requiredBank[7].url}></audio>
				X
			</div>
			<div className="drum-pad" id={requiredBank[8].id} onClick={() => playSound(67)}>
				<audio className="clip" id="C" src={requiredBank[8].url}></audio>
				C
			</div>
		</div>
	);
}

export default KeysBox;