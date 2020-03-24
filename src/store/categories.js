export default {
	state: {
		categories: []
	},
	mutations: {
		setCategories(state, items) {
			state.categories = items
		},
	},
	actions: {
		getCategories(ctx) {
			const { commit } = ctx

			fetch('/api/categories', {
				credentials: 'include'
			})
				.then(res => {
					if (!res.ok) {
						console.log(res)
						throw new Error('Ответ не 200: ' + res.status)
					}
					return res.json()
				})
				.then(data => {
					commit('setCategories', data)
				})
		},
	}
}
