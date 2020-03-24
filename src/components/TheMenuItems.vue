<template>
	<ul class="TheMenuItems">
		<li class="TheMenuItems__listItem" v-for="item in categories" :key="item.path">
			<router-link class="TheMenuItems__link" :to="{ name: 'category', params: { id: item.latin } }">
				{{ item.title }}
			</router-link>
		</li>
	</ul>
</template>

<script>

export default {
	props: {
		categories: {
			type: Array
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
