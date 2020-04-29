<template>
  <div >
      <h2>Tareas</h2>
      <nueva @guardarTarea="onGuardarTareas($event)"></nueva>
      <div v-if="tareas.length">
            <h2>Lista de Tareas</h2>
            <div class="wrapper">
                <table >
                    <tr>
                        <th>Estado</th>
                        <th>Nombre</th>
                        <th>Responsable</th>
                    </tr>
                    <tarea v-for="(tarea,index) in tareas" :key="index"
                      :item="{...tarea, index}" @changeState="onChangeState($event)"></tarea>
                </table>
            </div>
      </div>

  </div>
</template>

<script>
import Nueva from '../components/Tareas/Nueva'
import Tarea from '../components/Tareas/Tarea'

export default {
    components: {
        Nueva,
        Tarea
    },
    data() {
        return {
            tareas: []
        }
    },
    created() {
        this.$root.$on('deleteTarea', this.onDelete)
    },
    methods: {
        onGuardarTareas(tarea) {
            if(tarea.nombre) {
                this.tareas.push(tarea)
                console.log(this.tareas)
            }
        },
        onChangeState(i) {
            this.tareas[i].isCompleted = !this.tareas[i].isCompleted
            console.log(this.tareas)
        },
        onDelete(i) {
            this.tareas.splice(i,1)
            console.log(this.tareas)
        }
    }

}
</script>

<style>
.wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

</style>