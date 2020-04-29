<template>
  <div>
    <h2>Mensajes</h2>
    <nuevo></nuevo>
    <lista></lista>
  </div>
</template>

<script>
import Nuevo from './Nuevo'
import Lista from './Lista'

export default {
  components: {
    Nuevo,
    Lista
  }
}

</script>
