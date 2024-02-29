const staticData = {
	//type = 'text'
	propertyType: {
		Apartment: 21,
		Villa: 1,
		Twinhouse: 6,
		Townhouse: 7,
		Duplex: 3,
		Penthouse: 4,
		Chalet: 5,
		Studio: 9,
		Cabin: 11,
		Clinic: 13,
		Office: 8,
		Retail: 10,
	},
	//type = 'number'
	bedrooms: {
		'1 Bedrooms': { exact: [1] },
		'2 Bedrooms': { exact: [2] },
		'3 Bedrooms': { exact: [3] },
		'4 Bedrooms': { exact: [4] },
		'5+ Bedrooms': { greater_than: 5 },
	},
  //type = 'range'
	price: {
		'1M To 4M': { min: 1000000, max: 4000000 },
		'4M To 10M': { min: 4000000, max: 10000000 },
		'10M To 15M': { min: 10000000, max: 15000000 },
		'15M To 30M': { min: 15000000, max: 30000000 },
		'30M To 50M': { min: 30000000, max: 50000000 },
		'50M To 100M': { min: 50000000, max: 100000000 },
	},
}

export default staticData
