<template>
  <div>
      <h2>Codificador</h2>
      <input type="text" placeholder="Escribe un mensaje" v-model="msg">
      <p>Mesaje : {{ msg }}</p>
      <p>Inverso : {{ msgReverse }}</p>
      <p>Codificado : {{ msgCodificado }}</p>
      <p>Codificado PC : {{ msgCodificado }}-{{ now }}  </p>
      <p>Codificado M : {{ msgCodificado }}-{{ nowMethod() }}  </p>
      <p>Codificado watch: {{ this.msgCodificadoWacher }}</p>
      <p>Mesaje con filtro : {{ msg | invertir }}</p>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            msg: ''
        }
    },
    computed : {
        msgReverse: function () {
            return this.msg.split('').reverse().join('')
        },
        msgCodificado : function () {
            return this.msg.toLowerCase()
                .replace(/[^\w ]+/g, '')
                .replace(/ +/g, '-')
        },
        now: function () {
            const ahora = new Date()
            return String(ahora.getHours())+
                    String(ahora.getMinutes())+
                    String(ahora.getSeconds())
        }
    },
    methods: {
        nowMethod: function () {
            const ahora = new Date()
            return String(ahora.getHours())+
                    String(ahora.getMinutes())+
                    String(ahora.getSeconds())
        }
    },
    mounted: function () {
        this.msgCodificadoWacher = this.msg
    },
    watch : {
        // eslint-disable-next-line no-unused-vars
        msg: function (newMsg, oldMsg) {
             const ahora = new Date()
            return this.msgCodificadoWacher = 
                newMsg.toLowerCase()
                .replace(/[^\w ]+/g, '')
                .replace(/ +/g, '-') 
                    +String(ahora.getHours())+
                    String(ahora.getMinutes())+
                    String(ahora.getSeconds())
        } 
    },
    filters: {
        invertir: function (item) {
        return item.split('').reverse().join('')
        }
    }
}
</script>

<style>
</style>