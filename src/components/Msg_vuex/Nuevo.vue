<template>
  <div id="newTarea">
    <input type="text" placeholder="Nuevo mensaje"
    v-model="newMsg">
    <button @click="onAdd">Añadir</button>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
      newMsg: ''
    }
  },
  methods: {
    onAdd: function () {
      if (this.newMsg) {
        console.log('Nuevo mensaje', this.newMsg)
        this.$store.dispatch('postMessage', { titulo: this.newMsg })
          .catch()
          .finally(() => { this.newMsg = '' })
      }
    }
  }
}

</script>
