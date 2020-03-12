<template>
	<div class="ProductCard">
		<img class="ProductCard__img" :src="img.base" :srcset="img.x2 + ' 2x'" />
		<h3>{{ title }}</h3>
		<div class="ProductCard__text">{{ description }}</div>
		<div class="ProductCard__price">
			<span>{{ price.base }}</span>
			<span v-if="price.old">{{ price.old }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		img: Object,
		title: String,
		description: String,
		price: Number
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
