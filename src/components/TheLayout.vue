<template>
	<div class="TheLayout">
		<TheMenu class="TheLayout__menu" />
		<TheHeader class="TheLayout__header" />
		<div class="TheLayout__content">
			<slot />
		</div>
	</div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheMenu from '../components/TheMenu.vue'

import { mapActions } from 'vuex'

export default {
	created(){
		this.getCategories()
	},
	components: {
		TheHeader,
		TheMenu
	},
	methods: {
		...mapActions(['getCategories'])
	}
}
</script>

<style scoped>
.TheLayout {
	display: grid;
	grid-template-areas:
		'menu header'
		'menu content';
	grid-template-rows: 60px 1fr;
	grid-template-columns: minmax(200px, 300px) 1fr;
	max-height: 100vh;
}
.TheLayout__menu {
	grid-area: menu;
}
.TheLayout__header {
	grid-area: header;
}
.TheLayout__content {
	grid-area: content;
	overflow-y: auto;
}
</style>
