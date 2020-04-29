<template>
  <div id="newTarea">
    <input type="text" placeholder="Nuevo mensaje"
    v-model="newMsg">
    <button @click="onAdd">Añadir</button>
  </div>
</template>

<script>
import store from '../../store/store.js'
import axios from 'axios'
const url = 'http://localhost:3000/mensajes'
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
        axios.post(url, { titulo: this.newMsg })
          .then(res => {
            console.log(res)
            if (res.status === 201 && res.data.id) {
              // Emitir un evento de salida al bus de eventos
              // this.$root.$emit('addMsg', this.newMsg)
              // se evita la necesidad de emitir un evento
              store.state.messages.push(this.newMsg)
            }
          })
          .catch()
          .finally(() => { this.newMsg = '' })
      }
    }
  }
}

</script>
