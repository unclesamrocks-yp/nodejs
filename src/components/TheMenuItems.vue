<template>
	<ul class="TheMenuItems">
		<li class="TheMenuItems__listItem" v-for="item in items" :key="item.path">
			<router-link class="TheMenuItems__link" :to="{ name: 'category', params: { id: item.path } }">
				{{ item.title }}
			</router-link>
		</li>
	</ul>
</template>

<script>
import categories from '../assets/json/categories.json'
export default {
	data() {
		return {
			items: categories
		}
	}
}
</script>

<style scoped>
ul {
	padding: 0;
}
.TheMenuItems__listItem {
	list-style: none;
}
.TheMenuItems__link {
	color: inherit;
	text-decoration: none;
	padding: 10px 20px;
	display: inline-block;
	width: 100%;
}
.TheMenuItems__link:hover {
	background: rgba(0, 0, 0, 0.1);
}
</style>
