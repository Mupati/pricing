<template>
  <div id="singlePrice">
    <h1>{{ name }}</h1>
    <p>
      GHs
      <br />
      <span>{{ price }}</span>
    </p>
    <ul v-for="(singlePackage, index) in packages" :key="index">
      <li>{{ singlePackage }}</li>
    </ul>
    <button @click="doSubscribe(id)">Subscribe</button>
  </div>
</template>

<script>
export default {
  name: "price",
  props: ["id", "banner", "name", "price", "packages"],
  data() {
    return {};
  },

  methods: {
    doSubscribe(id) {
      alert("Subscribed to " + id);
    }
  }
};
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  padding: 20px 60px;
}
p span {
  font-size: 50px;
  margin: 20px 0px;
}
ul {
  padding: 0;
  list-style: none;
}
</style>
