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
		<button v-else @click="add(id)">В корзину</button>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
	props: {
		id: String,
		img: Object,
		title: String,
		description: String,
		price: Number
	},
	methods: {
		...mapActions('cart', ['add', 'remove'])
	},
	computed: {
		...mapState('cart', ['items']),
		has() {
			debugger
			return this.items.find(itemF => {
				return itemF === this.id
			})
		}
	}
}
</script>

<style scoped>
.ProductCard {
	box-shadow: 0 5px 32px 0 rgba(0, 0, 0, 0.5);
	margin: 10px;
	border-radius: 4px;
	width: calc(100% / 3 - 20px);
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
}
.ProductCard__img {
	flex-grow: 1;
}
.ProductCard__text {
	margin: 10px;
}
.ProductCard__price {
	margin: 10px;
}
</style>
