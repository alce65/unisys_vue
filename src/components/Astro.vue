<template>
  <div class="img-wrapper">
      <h2>Imagen del dia</h2>
      <img :src="imagen" :alt="textoImagen">
      <p>{{textoImagen }}</p>
  </div>
</template>

<script>

import axios from 'axios'

const APIKey = 'vlpcgqn46ktzhjhMetjE9M5QBZVWCalj3mcyZjBt'
const urlNASA = 'https://api.nasa.gov/planetary/apod?api_key=' + APIKey

export default {
    data: function () {
        return {
            imagen:'',
            textoImagen: ''
        }
    },
  created() {
    this.getAstro()
  },
  props: {
      fecha : {type: String}
  },
  methods: {
    getAstro() {
        let url = urlNASA
        if (this.fecha) {
            url = urlNASA + `&date=${this.fecha}`
        }
        axios.get(url).then(
            (resp) => { 
            console.log(resp)
            this.imagen = resp.data.url
            this.textoImagen = resp.data.title
            }
      )
    }
  }
}
</script>

<style>
    .img-wrapper {
        width: 50%;
        }
    img {
         max-width: 100%;
    }

</style>