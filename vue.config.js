module.exports = {
	devServer: {
		before(app) {
			app.get('/api/products/:id', (req, res, next) => {
				console.log('123')
				const {
					params: { id }
				} = req

				const items = products[id]

				if (!items) {
					res.status(404).end()
					return
				}

				res.json(items)
			})
		},
		proxy: 'http://localhost:3000'
	}
}

const cups = require('./src/assets/json/cups')

const products = {
	krujki: cups
}
