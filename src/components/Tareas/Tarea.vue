<template>
    <tr>    
        <td>
            <input type="checkbox" @change="sendChange()"
            v-model="item.isCompleted">
        </td>
        <td :class="{completed: item.isCompleted}">{{item.nombre}}</td>
        <td :class="{completed: item.isCompleted}">{{item.responsable}}</td>
        <td> <span class="boton" @click="sendDelete()">🗑️</span> </td>
    </tr>
</template>

<script>
export default {
    data (){
        return {
           /*  : {
                nombre: 'aaaaa',
                responsable: 'bbbbb',
                isCompleted: false
            } */
        }
    }, 
    props: ['item'],
    methods: {
        sendChange() {
            this.$emit('changeState', this.item.index)
        },
        sendDelete() {
            this.$root.$emit('deleteTarea', this.item.index)
        }
    }
}
</script>

<style>
    .completed {
        font-style: italic;
        text-decoration: line-through;
    }
    .boton {
        cursor: pointer;
    }

</style>