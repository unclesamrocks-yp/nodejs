import express from 'express'

const router = express.Router()

router.get('/products/:category', (req, res) => {
  const {
    params: {
      category
    },
    query: {
      page = 0,
      'items-on-page': itemsOnPage
    }
  } = req

  console.log(itemsOnPage)
  res.json(products[category] || [])
})

const cups = require('../../src/assets/json/cups')

const products = {
	krujki: cups
}

export default router