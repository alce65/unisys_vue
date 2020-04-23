<template>
    <div class="saludo">
        <p ><span v-once>{{ saludo }}</span>, {{ nombre }}</p>
        <div class="input">
            <input type="text" :placeholder="msg" v-model="nombre">
            <button v-html="boton" @click.="onBorrar($event)"   ></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Saludo',
    data: () => {
        return {
            saludo: 'Hola',
            nombre: '',
            boton: '<i>borrar</i>',
            msg: 'dime tu nombre'
        }
    }, 
    methods: {
        onBorrar: function (ev) {
            console.log(ev)
            this.nombre = 'dime tu nombre'
        }
    }
}
</script>

<style>
    .saludo {
        margin: 2rem;
        border: 1px solid grey;
    }
    .input {
        margin: 2rem;
    }

</style>