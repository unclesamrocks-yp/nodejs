<template>
  <div>
    <ul>
      <li>
        <router-link :to="{name: 'admin-products'}">Добавить товар</router-link>
      </li>
      <li>
        <router-link :to="{name: 'admin-categories'}">Добавить категорию</router-link>
      </li>
    </ul>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style scoped>
ul {
  display: flex;
}

li {
  list-style: none;
}

li > a {
  padding: 10px 20px;
  margin: 8px;
  background: #f2f2f2;
  border-radius: 3px;
  color: #333;
  text-decoration: none;
}
.router-link-exact-active {
  background: #22c56b;
  color: #fff;
}
</style>