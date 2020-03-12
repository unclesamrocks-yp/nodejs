import Vuex from 'vuex'

import cart from './cart'

export default () => {
	return new Vuex.Store({
		modules: {
			cart
		},
		state: {},
		mutations: {}
	})
}
