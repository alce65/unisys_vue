<template>
  <div id="listaMensajes" v-if="store.state.messages.length">
    <h3>Lista de Mensajes</h3>
    <ul>
      <li v-for="(msg, index) in store.state.messages" :key="index">{{msg}}</li>
    </ul>
  </div>
</template>

<script>

import store from '../../store/store.js'
import axios from 'axios'
const url = 'http://localhost:3000/mensajes'
export default {
  data: () => {
    return {
      // store: store
      store
    }
  },
  created () {
    axios.get(url).then(res => {
      store.state.messages = res.data.map(item => item.titulo)
    })
  },
  methods: {
  }
}

</script>
