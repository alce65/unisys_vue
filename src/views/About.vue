<template>
  <div class="about">
    <h1>This is an about page</h1>
    <astro>
      <p slot="title">Imagen del {{ hoy.toLocaleString() }}</p>
      <p slot='footer'>Primer <b>slot</b> que creo</p>
    </astro>
    <astro fecha="2020-01-01">
      <p slot="title"> Imagen del 1/1/2020</p>
    </astro>
  </div>
</template>

<script>
import Astro from "../components/Astro";

export default {
  components: {
    Astro
  },
  data() {
    return {
      hoy: new Date()
    }
  }

}
</script>