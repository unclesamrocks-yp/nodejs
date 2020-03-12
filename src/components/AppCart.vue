<template>
	<div>
		<span v-if="items.length">{{ items.length }}</span>
		<span v-else>Товаров в корзине нет</span>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	created() {
		this.getItems()
	},
	computed: {
		items() {
			return this.$store.state.cart.items
		}
	},
	methods: {
		...mapActions('cart', ['getItems'])
	},
	mounted() {
		console.log(this.items)
	}
}
</script>
