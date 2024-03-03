const staticData = {
	//type = 'text'
	propertyType: {
		apartment: {
			ar: 'شقة',
			en: 'Apartment',
			value: 21,
		},
		villa: {
			ar: 'فيلا',
			en: 'Vil  la',
			value: 1,
		},
		twinhouse: {
			ar: 'توين هاوس',
			en: 'Twinhouse',
			value: 6,
		},
		townhouse: {
			ar: 'تاون هاوس',
			en: 'Townhouse',
			value: 7,
		},
		duplex: {
			ar: 'دوبلكس',
			en: 'Duplex',
			value: 3,
		},
		penthouse: {
			ar: 'بنتهاوس',
			en: 'Penthouse',
			value: 4,
		},
		chalet: {
			ar: 'شاليه',
			en: 'Chalet',
			value: 5,
		},
		studio: {
			ar: 'استوديو',
			en: 'Studio',
			value: 9,
		},
		cabin: {
			ar: 'كوخ',
			en: 'Cabin',
			value: 11,
		},
		clinic: {
			ar: 'عيادة',
			en: 'Clinic',
			value: 13,
		},
		office: {
			ar: 'مكتب',
			en: 'Office',
			value: 8,
		},
		retail: {
			ar: 'تجزئة',
			en: 'Retail',
			value: 10,
		},
	},
	//type = 'display'
	bedrooms: {
		one: {
			ar: '1 غرفة نوم',
			en: '1 Bedroom',
			value: { exact: [1] },
			display: '1',
		},
		two: {
			ar: '2 غرف نوم',
			en: '2 Bedrooms',
			value: { exact: [2] },
			display: '2',
		},
		three: {
			ar: '3 غرف نوم',
			en: '3 Bedrooms',
			value: { exact: [3] },
			display: '3',
		},
		four: {
			ar: '4 غرف نوم',
			en: '4 Bedrooms',
			value: { exact: [4] },
			display: '4',
		},
		'five+': {
			ar: '5 غرف نوم فأكثر',
			en: '5+ Bedrooms',
			value: { greater_than: 5 },
			display: '5+',
		},
	},

	//type = 'range'
	price: {
		one: {
			ar: '1م إلى 4م',
			en: '1M To 4M',
			value: { min: 1000000, max: 4000000 },
		},
		four: {
			ar: '4م إلى 10م',
			en: '4M To 10M',
			value: { min: 4000000, max: 10000000 },
		},
		ten: {
			ar: '10م إلى 15م',
			en: '10M To 15M',
			value: { min: 10000000, max: 15000000 },
		},
		fifteen: {
			ar: '15م إلى 30م',
			en: '15M To 30M',
			value: { min: 15000000, max: 30000000 },
		},
		thirty: {
			ar: '30م إلى 50م',
			en: '30M To 50M',
			value: { min: 30000000, max: 50000000 },
		},
		fifty: {
			ar: '50م إلى 100م',
			en: '50M To 100M',
			value: { min: 50000000, max: 100000000 },
		},
	},
}

export default staticData
