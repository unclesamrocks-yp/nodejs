import Vuex from 'vuex'

import category from './Category'

export default () => {
	return new Vuex.Store({
		modules: {
			category
		},
		state: {},
		mutations: {}
	})
}
