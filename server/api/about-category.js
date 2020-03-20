import express from 'express'

const router = express.Router()

router.get('/about-category/:category', (req, res) => {
	const {
		params: { category }
	} = req

	res.json({
		title: 'Кружки',
		itemsOnPage: 24,
		allItemsLength: 112
	})
})

export default router
