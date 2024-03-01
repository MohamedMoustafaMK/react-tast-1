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

export const extractOptionsTrans = (
	dataObject,
	language,
) => {
	if (dataObject) {
		const allInfo = []

		for (const key in dataObject) {
			if (dataObject.hasOwnProperty(key)) {
				const translation =
					language === 'ar' ? dataObject[key].ar : dataObject[key].en
				allInfo.push(
					translation !== undefined
						? translation
						: `translation not available for ${
								language === 'ar'
									? dataObject[key].ar
									: dataObject[key].en
							}.`,
				)
			}
		}

		return allInfo
	} else {
		return [`Data object not found.`]
	}
}
