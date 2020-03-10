<template>
	<div class="Category">
		<h1>Каталог</h1>
		<div class="Category__products">
			<ProductCard v-for="item in items" :key="item.title" v-bind="item" />
		</div>
	</div>
</template>

<script>
import ProductCard from '../components/AppProductCard.vue'
import CategoryStore from '../store/Category.js'

import { mapActions, mapState } from 'vuex'

export default {
	created() {
		const { id } = this.$route.params
		this.fetchAboutCategory(id)
	},
	// beforeRouteEnter(to, from, next) {
	// 	const {
	// 		params: { id }
	// 	} = to
	// 	this.fetchAboutCategory(id).then(next)
	// },
	components: {
		ProductCard
	},
	data() {
		return {}
	},
	computed: {
		// ...mapState('catigories', ['items'])
	},
	methods: {
		// ...mapActions('catigories', ['fetchAboutCategory'])
	}
}
</script>

<style scoped>
.Category__products {
	display: flex;
	flex-wrap: wrap;
}
</style>
