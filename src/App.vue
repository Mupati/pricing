<template>
  <div id="app">
    <Hero />
    <Price />
  </div>
</template>

<script>
import Hero from "./components/Hero";
import Price from "./components/Price.vue";

export default {
  name: "App",
  components: {
    Price,
    Hero
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
