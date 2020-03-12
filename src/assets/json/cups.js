const products = [
	{
		title: 'Кружка с принтом',
		img: {
			base: '/images/cup1.png',
			x2: '/images/cup1.png',
			galery: []
		},
		description: 'Крутая кружка с рисунком',
		price: {
			base: 1299
		}
	},
	{
		title: 'Кружка без принта',
		img: {
			base: '/images/cup2.png',
			x2: '/images/cup2.png',
			galery: []
		},
		description: 'Крутая кружка с отсутствием рисунка',
		price: {
			old: 3399,
			base: 2299
		}
	}
]

module.exports = new Array(4)
	.fill(null)
	.map(() => products)
	.flat()
