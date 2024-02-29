export const formatNumberWithCommas = (number) => {
	let numString = String(number)

	if (numString.length <= 3) {
		return numString
	} else {
		for (let i = numString.length - 3; i > 0; i -= 3) {
			numString = numString.slice(0, i) + ',' + numString.slice(i)
		}
		return numString
	}
}
