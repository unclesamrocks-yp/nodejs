import express from 'express'
import aboutCategory from './about-category'
import products from './products'

const router = express.Router()

router.use('/api', [
  aboutCategory,
  products,
])

export default router