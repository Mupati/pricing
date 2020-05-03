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
        <Price :id="gold.id" :name="gold.name" :price="gold.price" :packages="gold.packages" />
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
  padding-top: 10%;
}
#pricing {
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  border: 1px solid #eee;
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
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 50px;
}
#bronze {
  border: 2px solid brown;
}
#bronze h1,
#bronze button {
  background: brown;
  color: #fff;
}
#silver {
  border: 2px solid silver;
}
#silver h1,
#silver button {
  background: silver;
  color: #fff;
}

#gold {
  border: 2px solid #eaa844;
}
#gold h1,
#gold button {
  background: #eaa844;
  color: #fff;
}

/* Extra small devices (phones, 600px and down) */
/* @media only screen and (max-width: 600px) {
  #pricing {
    flex-direction: column;
  }
} */

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 768px) {
  #pricing {
    flex-direction: column;
    border: none;
  }
  .price {
    margin: 20px auto;
  }
}
</style>
