

const lowerCap = (input, output, setOutput) => {
	setOutput([...output, input.toLowerCase()])
	return input.toLowerCase()
}

export default lowerCap