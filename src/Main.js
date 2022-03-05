import React, {useState} from 'react'
import randomCap from './randomCap';
import upperCap from './upperCap';
import lowerCap from './lowerCap';
import { v4 as uuidv4 } from 'uuid';
import About from './About';

function Main() {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState([]);
	const [showInfo, setShowInfo] = useState(false);
	const handleClear = () => {
		setInput('');
		setOutput([])
	} 
  return (
	  <div>
		  <input
			  autoFocus
		  id='input'
		  type='text'
		  placeholder='add text here'
		  value={input}
		  onChange={(e) => setInput(e.target.value)}
		/>
		<br/>
		<button onClick={() => randomCap(input, output, setOutput)}>random</button>
		<button onClick={() => upperCap(input, output, setOutput)}>Upper Case</button>
		<button onClick={() => lowerCap(input, output, setOutput)}>Lower Case</button>
		<button onClick={handleClear}>clear everything</button>
		{output.map(op => <h5 key={uuidv4()}>{op}</h5>)}
		<h3 onClick={() => setShowInfo(!showInfo)} style={{cursor:'pointer'}}>aBoUt</h3>
		{showInfo && <About/>}
		
	</div>
  )
}

export default Main