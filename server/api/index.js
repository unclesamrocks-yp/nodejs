import express from 'express'
import aboutCategory from './about-category'
import products from './products'
import cart from './cart'

const router = express.Router()

router.use('/api', [aboutCategory, products, cart])

export default router
