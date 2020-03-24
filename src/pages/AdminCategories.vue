<template>
  <div>
    <form @submit.prevent="addCategory">
      <label>
        Название категории
        <input v-model="title" type="text">
      </label>
      <label>
        Название ссылки на латинском
        <input v-model="latin" type="text">
      </label>
      <button type="submit">Добавить</button>
    </form>
    <h3>Имеющиеся категории</h3>
    <ul>
      <li v-for="item in items" :key="item._id">{{ item.title }} <span @click="remove(item._id)">X</span></li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import AdminCategotyStore from '../store/admin-categories.js'

export default {
	created() {
    this.$store.registerModule('adminCategories', AdminCategotyStore)
    this.getItems()
	},
  data(){
    return {
      title: '',
      latin: '',
    }
  },
  computed: {
    ...mapState('adminCategories', [
      'items',
    ])
  },
  methods: {
    ...mapActions('adminCategories', [
      'getItems',
      'add',
      'remove',
      // 'removeAll'
    ]),
    addCategory(){
      const {
        title,
        latin,
      } = this

      return this.add({
        title,
        latin,
      })
        .then(() => {
          this.title = ''
          this.latin = ''
        })
    }
  }
}
</script>

<style scoped>
label {
  display: block;
  margin: 20px 10px;
}
input {
  display: block;
  outline: none;
  padding: 3px;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
}
button {
  margin: 10px;
}
</style>