/*  global Vue */

Vue.component('mi-armario', {
    template: `
        <div>
            <p>Hola veo que te gusta {{ aficion }}</p>
            <input type="text" name="" id="" 
            :placeholder="msg1" v-model:value="aficion">        
        </div>
        `,
    data: function () {
        return {
            msg1: 'Dime tu principal afición'
        }
    },
    props: {
        aficion: {type: String, default:'de todo'}
    }
})

// eslint-disable-next-line no-unused-vars
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Curso de Vue',
        usuario: 'Pepe',
        msg: 'Dime tu nombre'
    },
    components: {
        appFooter: {
            template: `
            <footer>
                <address>{{autor}}</address>
            </footer>
            `,
            data: () => {
                return {
                    autor: 'Alejandro Cerezo'
                }
            }

        }
    }
})
