import express from 'express'
import bodyParser from 'body-parser'

const jsonParser = bodyParser.json()

const router = express.Router()

let items = []

router.post('/cart/add', jsonParser, (req, res) => {
	const { id } = req.body
	items.push(id)
	res.json(items)
})

router.post('/cart/remove', jsonParser, (req, res) => {
	const { id } = req.body
	items.splice(
		items.findIndex(item => id === item),
		1
	)
	res.json(items)
})

router.get('/cart/products', jsonParser, (req, res) => {
	res.json(items)
})

export default router
