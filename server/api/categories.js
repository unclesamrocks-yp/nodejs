import express from 'express'

import { dbClient } from '../db.js'

const router = express.Router()

router.get('/categories', async (req, res) => {
  
  const client = await dbClient
  const shop = client.db('shop')
  const categories = shop.collection('categories')

  const categoriesJSON = await categories.find().toArray()

  res.json(categoriesJSON)
})

export default router
