<template>
  <div id="listaMensajes" v-if="$store.state.messages.length">
    <h3>Lista de Mensajes</h3>
    <ul>
      <li v-for="(msg, index) in $store.state.messages" :key="index">{{msg}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data: () => { return {} },
  created () {
    this.$store.dispatch('getMessages')
  },
  methods: {}
}

</script>
