<template>
	<div class="ProductCard">
		<img class="ProductCard__img" :src="img.base" :srcset="img.x2 + ' 2x'" />
		<h3>{{ title }}</h3>
		<div class="ProductCard__text">{{ description }}</div>
		<div class="ProductCard__price">
			<span>{{ price.base }}</span>
			<span v-if="price.old">{{ price.old }}</span>
		</div>
		<button v-if="has" @click="remove(id)">Удалить</button>
	</div>
</template>

<script>
import cups from '../assets/json/cups.js'

export default {
	props: {
		id: String,
		img: Object,
		title: String,
		description: String,
		price: Number
	},
	data() {
		return {
			items: cups
		}
	},
	methods: {
		...mapActions('cart', ['remove'])
	}
}
</script>
