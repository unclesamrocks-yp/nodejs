import Vuex from 'vuex'

import cart from './cart.js'
import categories from './categories.js'

export default () => {
	return new Vuex.Store({
		modules: {
			cart
		},
		state: {
			...categories.state
		},
		mutations: {
			...categories.mutations
		},
		actions: {
			...categories.actions
		}
	})
}
