import express from 'express'
import bodyParser from 'body-parser'
import { ObjectId } from 'mongodb'

import { dbClient } from '../../db.js'

const router = express.Router()
const jsonParser = bodyParser.json()

router.use(jsonParser)
router.post('/category/add', async (req, res) => {
  const {
    body 
  } = req

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    res.status(400).end()
    return
  }

  const client = await dbClient
  const shop = client.db('shop')
  const categories = shop.collection('categories')

  await categories.insertOne(req.body)

  const categoriesJSON = await categories.find().toArray()

  res.status(200).json(categoriesJSON)
})

router.post('/category/remove', async (req, res) => {
  const {
    body 
  } = req

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    res.status(400).end()
    return
  }

  const client = await dbClient
  const shop = client.db('shop')
  const categories = shop.collection('categories')

  await categories.remove({_id: ObjectId(body._id) })

  const categoriesJSON = await categories.find().toArray()

  res.status(200).json(categoriesJSON)
})



export default router