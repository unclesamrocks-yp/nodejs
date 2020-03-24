import express from 'express'

import { dbClient } from '../db.js'

const router = express.Router()

router.get('/products/:category', async (req, res) => {
  
  const {
    params: {
      category
    },
    query: {
      page = 0,
      'items-on-page': itemsOnPage
    }
  } = req
  
  const client = await dbClient
  const shop = client.db('shop')
  const categories = shop.collection('categories')
  const products = shop.collection('products')


  const categoryInDB = await categories.findOne({
    latin: category
  })

  if (!categoryInDB) {
    res.status(200).json([])
  }

  const {
    _id
  } = categoryInDB

  const productsInDb = await products.find({
    categoryId: _id.toString()
  })
    .toArray()


  res.json(productsInDb)
})

export default router