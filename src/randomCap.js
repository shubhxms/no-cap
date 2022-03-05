const randomCap = (input, output, setOutput) => {
	let modStr = ''
	let modArr = [];
	let inputArr = input.trim().split(' ');
	for (let wordInd in inputArr) {
		let word = inputArr[wordInd]
		let modWord = ''
		const inputLen = word.length
		let k = Math.floor(Math.random() * 2) + 1;
		let randArr = [];
		for (let i = 0; i <= parseInt(inputLen / k); i++) {
			randArr.push(Math.floor(Math.random() * inputLen))
		}
		for (let j = 0; j < inputLen;j++){
			let char = word[j]
			if (randArr.includes(word.indexOf(char))) {
				modWord += char.toUpperCase()
			} else {
				modWord+=char
			}
		}
		modArr.push(modWord)
	}
	modStr = modArr.join(' ')
	setOutput([...output, modStr]);
	return modStr
}

export default randomCap