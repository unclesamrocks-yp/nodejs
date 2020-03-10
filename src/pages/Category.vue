<template>
	<div class="Category">
		<h1>Каталог</h1>
		<div class="Category__products">
			<ProductCard v-for="item in items" :key="item.title" v-bind="item" />
		</div>
	</div>
</template>

<script>
import cups from '../assets/json/cups.js'
import ProductCard from '../components/AppProductCard.vue'

export default {
	components: {
		ProductCard
	},
	data() {
		return {
			items: cups
		}
	}
}
</script>

<style scoped>
.Category__products {
	display: flex;
	flex-wrap: wrap;
}
</style>
