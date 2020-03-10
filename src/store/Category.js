export default {
	namespaced: true,
	state: {
		isLoading: false,
		title: '',
		items: [],
		page: 0,
		itemsOnPage: 24,
		allItemsLength: 0,
		error: null
	},
	mutations: {
		setProducts(state, items = []) {
			state.items = items
		},
		setTitle(state, title = '') {
			state.title = title
		},
		setItemsSetting(state, settings) {
			const { itemsOnPage, allItemsLength } = settings

			state.itemsOnPage = itemsOnPage
			state.allItemsLength = allItemsLength
		},
		setLoading(state, isLoading) {
			state.isLoading = isLoading
		},
		setError(state, error) {
			state.error = error
			state.isLoading = false
		}
	},
	actions: {
		fetchAboutCategory(ctx, category) {
			const { commit } = ctx

			commit('setLoading', true)
			return fetch(`/api/about-category/${category}`)
				.then(res => {
					if (res.ok) {
						return res.json()
					}
					throw new Error('Ответ не 200: ' + res.status)
				})
				.then(data => {
					commit('setLoading', false)
					const { title, itemsOnPage, allItemsLength } = data

					commit('setTitle', title)
					commit('setItemsSetting', {
						itemsOnPage,
						allItemsLength
					})
				})
				.catch(err => {
					console.error(err)
					commit('setError', err)
				})
		},
		fetchData(ctx, category) {
			const { commit } = ctx

			commit('setLoading', true)
			return fetch(`/api/products/${category}`)
				.then(res => {
					if (res.ok) {
						return res.json()
					}
					throw new Error('Ответ не 200: ' + res.status)
				})
				.then(data => {
					commit('setProducts', data)
				})
				.catch(err => {
					console.error(err)
					commit('setError', err)
				})
		}
	},
	getters: {}
}
