<template>
  <div>
      <input type="text" name="" placeholder="Nueva tarea" v-model="nt.nombre">
      <input type="text" name="" placeholder="Responsable" 
        v-model="nt.responsable" >
      <button @click="sendGuardar()">Guardar</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            nt: {
                nombre: '',
                responsable: '',
                isCompleted: false
            }
        }
    },
    methods: {
        sendGuardar() {
            if (this.nt.nombre) {
                this.$emit('guardarTarea', JSON.parse(JSON.stringify(this.nt)))
                this.nt = {
                    nombre: '',
                    responsable: '',
                    isCompleted: false
                }
            }
        }
    }
}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 2rem auto;
        }
</style>>