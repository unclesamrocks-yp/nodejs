<template>
	<div class="Category">
		<div v-if="error">Ошибка</div>
		<template v-else>
			<h1>{{ title }}</h1>
			<div class="Category__products">
				<div v-if="isLoading">
					Загрузка...
				</div>
				<div v-else-if="!items.length">
					Товаров в категории нет
				</div>
				<template v-else>
					<ProductCard v-for="item in items" :key="item.id" v-bind="item" />
				</template>
			</div>
			<div>{{ page + 1 }}/{{ Math.ceil(allItemsLength / itemsOnPage) }}</div>
		</template>
	</div>
</template>

<script>
import ProductCard from '../components/AppProductCard.vue'
import CategoryStore from '../store/Category.js'

import { mapActions, mapState } from 'vuex'

export default {
	created() {
		this.$store.registerModule('categories', CategoryStore)
	},
	beforeRouteEnter(to, from, next) {
		const {
			params: { id }
		} = to

		next(vm => {
			return Promise.all([vm.fetchAboutCategory(id), vm.fetchData(id)])
		})
	},
	components: {
		ProductCard
	},
	data() {
		return {}
	},
	computed: {
		...mapState('categories', ['isLoading', 'title', 'items', 'page', 'itemsOnPage', 'allItemsLength', 'error'])
	},
	methods: {
		...mapActions('categories', ['fetchAboutCategory', 'fetchData'])
	},
	watch: {
		'$route.params.id'(val) {
			this.fetchAboutCategory(val)
			this.fetchData(val, this.page)
		}
		// 'page'(val){
		// 	this.fetchData(val, this.page)
		// }
	}
}
</script>

<style scoped>
.Category__products {
	display: flex;
	flex-wrap: wrap;
}
</style>
