export default {
	namespaced: true,
	state: {
		items: []
	},
	mutations: {
		setItems(state, items) {
			state.items = items
		},
		add(state, item) {
			const findedItem = state.items.find(itemF => {
				return itemF === item
			})

			if (!findedItem) state.items.push(item)
		},
		remove(state, item) {
			const index = state.items.findIndex(itemF => {
				return itemF === item
			})

			return state.items.splice(index, 1)
		},
		has(state, item) {
			return state.items.find(itemF => {
				return itemF === item
			})
		}
	},
	actions: {
		getItems(ctx) {
			const { commit } = ctx

			fetch('/api/cart/products')
				.then(res => {
					if (!res.ok) {
						console.log(res)
						throw new Error('Ответ не 200: ' + res.status)
					}
					return res.json()
				})
				.then(data => {
					commit('setItems', data)
				})
		},
		add(ctx, item) {
			const { commit } = ctx

			commit('add', item)
			fetch('/api/cart/add', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({ id: item })
			})
				.then(res => {
					if (!res.ok) {
						console.log(res)
						throw new Error('Ответ не 200: ' + res.status)
					}
					return res.json()
				})
				.then(data => {
					commit('setItems', data)
				})
				.catch(err => {
					commit('remove', item)
				})
		},
		remove(ctx, item) {
			const { commit } = ctx

			commit('remove', item)
			fetch('/api/cart/remove', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({ id: item })
			})
				.then(res => {
					if (!res.ok) {
						console.log(res)
						throw new Error('Ответ не 200: ' + res.status)
					}
					return res.json()
				})
				.then(data => {
					commit('setItems', data)
				})
				.catch(err => {
					commit('add', item)
				})
		}
	}
}
