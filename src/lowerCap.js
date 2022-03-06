

const lowerCap = (input, output, setOutput) => {
	setOutput([input.toLowerCase(), ...output])
	return input.toLowerCase()
}

export default lowerCap