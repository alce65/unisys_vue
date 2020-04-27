<template>
    <div>
        <h2>Mensajes</h2>
        <div>
            <input type="text" placeholder="Nuevo mensaje"
            v-model="newMsg">
            <button type="button" @click="onGuardar">Guardar</button>
        </div>
        <div v-if="mensajes.length">
            <h3>Lista de mensajes</h3>
            <ul>
                <li v-for="(mensaje, index) in mensajes" :key="index">
                    {{mensaje}}
                </li>
            </ul>
        </div>
        <div v-else>
            <p>Animate con algún mensaje</p>
        </div>
    </div>
</template>

<script>

export default {
    data: () => {
        return {
            newMsg: '',
            mensajes: []
        }
    },
    methods: {
        onGuardar: function () {
            if(this.newMsg) {
                this.mensajes.push(this.newMsg)
                this.newMsg = ''
                console.log(this.mensajes)
            }
        }
    }
}
</script>

<style>
    ul {
        list-style: none;
    }
</style>