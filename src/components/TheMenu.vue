<template>
	<nav class="TheMenu">
		<router-link to="/" class="TheMenu__logo-container">
			<img src="../assets/logo.png" />
		</router-link>
		<TheMenuItems :categories="categories"/>
	</nav>
</template>

<script>
import { mapState } from 'vuex'

import TheMenuItems from './TheMenuItems.vue'

export default {
	components: {
		TheMenuItems
	},
	computed: {
		...mapState(['categories'])
	}
}
</script>

<style scoped>
.TheMenu {
	max-width: 300px;
	background: #f0f0f0;
	height: 100vh;
}
.TheMenu__logo-container {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
}
img {
	width: 45%;
}
</style>
