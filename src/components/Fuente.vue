<template>
  <div>
      <p :style="fontsize">Esto es un ejemplo</p>
      <div>
          <input type="number" v-model="size" disabled>
      </div>
      <div>
          <input type="range" max="4" min="1" v-model="size" step="0.1">
      </div>
  </div>
</template>

<script>
export default {
    data: function () {
        return {
            size: 2
        }
    },
    computed : {
        fontsize: function () {
            return {fontSize : `${this.size}rem`}
        }
    }

}
</script>

<style>

</style>