<template>
  <div>
        <h2>Componentes de Vue</h2>
        <saludo></saludo>
       <scope-css></scope-css>
       <fuente></fuente>
       <tools></tools>
  </div>
</template>

<script>
import Saludo from '../components/Saludo'
import ScopeCss from "../components/ScopeCss";
import Fuente from "../components/Fuente";
import Tools from "../components/Tools";

export default {
    components: {
        Saludo,
        ScopeCss,
        Fuente,
        Tools
    }

}
</script>
