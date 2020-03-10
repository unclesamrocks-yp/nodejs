<template>
	<div id="app">
		<TheLayout>
			<router-view />
		</TheLayout>
	</div>
</template>

<script>
import TheLayout from './components/TheLayout.vue'
export default {
	name: 'App',
	components: {
		TheLayout
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: #2c3e50;
}

body {
	margin: 0;
}

* {
	box-sizing: border-box;
}
</style>
