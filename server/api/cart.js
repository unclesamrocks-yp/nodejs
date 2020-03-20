import express from 'express'
import bodyParser from 'body-parser'


const jsonParser = bodyParser.json()

const router = express.Router()

router.post('/cart/add', jsonParser, async (req, res) => {
	const { id } = req.body

	if (!req.session.cart) {
		req.session.cart = []
	}

	req.session.cart.push(id)
	await req.session.save()

	res.json(req.session.cart)
})

router.post('/cart/remove', jsonParser, (req, res) => {
	const { id } = req.body

	if (!req.session.cart) {
		req.session.cart = []
	}
	const index = req.session.cart.findIndex(item => id === item)

	if (!(index + 1)) {
		res
			.status(404)
			.json(req.session.cart)
		return
	}

	req.session.cart.splice(
		index,
		1
	)

	res.json(req.session.cart)
})

router.get('/cart/products', jsonParser, (req, res) => {
	res.json(req.session.cart)
})

router.get('/cart/remove-all', async (req, res) => {
	req.session.cart = []

	await req.session.save()

	res.status(200).end()
})

export default router
