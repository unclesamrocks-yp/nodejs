import VueRouter from 'vue-router'
import Home from './pages/Home.vue'

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/catalog/:id',
		name: 'category',
		component: () => import('./pages/Category.vue')
	},
	{
		path: '/admin/',
		name: 'admin',
		component: () => import('./pages/Admin.vue'),
		redirect: {
			name: 'admin-products'
		},
		children: [
			{
				path: 'categories',
				name: 'admin-categories',
				component: () => import('./pages/AdminCategories.vue'),
			},
			{
				path: 'products',
				name: 'admin-products',
				component: () => import('./pages/AdminProducts.vue'),
			}
		]
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router
