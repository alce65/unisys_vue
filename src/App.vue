<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <h1>Componentes en VUE</h1>
    <saludo></saludo>
    <tools></tools>
    <scope-css></scope-css>
    <fuente></fuente>
  </div>
</template>

<script>
import Saludo from "./components/Saludo";
import Tools from "./components/Tools";
import ScopeCss from "./components/ScopeCss";
import Fuente from "./components/Fuente";

export default {
  components: {
    //Saludo: Saludo
    Saludo,
    Tools,
    ScopeCss,
    Fuente
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
