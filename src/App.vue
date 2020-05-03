<template>
  <div id="app">
    <Hero />
    <section id="pricing">
      <div id="bronze" class="price">
        <Price
          :id="bronze.id"
          :name="bronze.name"
          :price="bronze.price"
          :packages="bronze.packages"
        />
      </div>
      <div id="silver" class="price">
        <Price
          :id="silver.id"
          :name="silver.name"
          :price="silver.price"
          :packages="silver.packages"
        />
      </div>
      <div id="gold" class="price">
        <Price
          :id="gold.id"
          :name="gold.name"
          :price="gold.price"
          :packages="gold.packages"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "./components/Hero";
import Price from "./components/Price.vue";
import { bronze, silver, gold } from "./api/data";

export default {
  name: "App",
  components: {
    Price,
    Hero
  },
  data() {
    return {
      bronze,
      silver,
      gold
    };
  }
};
</script>

<style>
#app {
  margin-top: 10%;
}
#pricing {
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  border: 1px solid green;
  border-radius: 10px;
  padding: 5rem 1rem;
  margin: 0 auto;
  max-width: 80vh;
}
#singlePrice {
  border: 1px;
}

.price {
  text-align: center;
  border: 1px solid #eee;
  border-radius: 20px;
  padding-bottom: 50px;
}
</style>
