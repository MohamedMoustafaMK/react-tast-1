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

export const extractDropdownOptionsInfo = (
	dataObject,
	language,
	getValues = false,
) => {
	if (dataObject) {
		const allInfo = []

		for (const key in dataObject) {
			if (dataObject.hasOwnProperty(key)) {
				const translation =
					language === 'ar' ? dataObject[key].ar : dataObject[key].en
				const info = getValues ? dataObject[key].value : translation
				allInfo.push(
					info !== undefined
						? info
						: `Information not available for ${
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
