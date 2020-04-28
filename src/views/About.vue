<template>
  <div class="about">
    <h1>This is an about page</h1>
    <astro></astro>
    <astro fecha="2020-01-01"></astro>
  </div>
</template>

<script>
import Astro from "../components/Astro";

export default {
  components: {
    Astro
  }

}
</script>