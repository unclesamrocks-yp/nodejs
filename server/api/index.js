import express from 'express'

import aboutCategory from './about-category'
import products from './products'
import cart from './cart'
import categories from './categories'
import adminCategories from './admin/categories'

const router = express.Router()

router.use('/api', [aboutCategory, products, cart, categories])

router.use('/api/admin', [adminCategories])

export default router
