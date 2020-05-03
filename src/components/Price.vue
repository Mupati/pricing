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
    <button @click="doSubscribe(id)">Subscribe Now</button>
    <modal :name="chosenPrice">
      <p>Successfull Subscription</p>
      <p>You have subscribed to the {{ chosenPrice }} Package</p>
    </modal>
  </div>
</template>

<script>
import { addSubscriber } from "../api/index";
export default {
  name: "price",
  props: ["id", "banner", "name", "price", "packages"],
  data() {
    return {
      chosenPrice: ""
    };
  },
  methods: {
    doSubscribe(id) {
      this.chosenPrice = this.priceName(id);
      // this.$modal.show(this.chosenPrice);
      this.showAlert();
      addSubscriber("name");
    },

    priceName(id) {
      if (id == 1) {
        return "Bronze";
      }
      if (id == 2) {
        return "Silver";
      }
      if (id == 3) {
        return "Gold";
      }
    },
    showAlert() {
      // Use sweetalert2
      this.$swal("Hello Vue world!!!");
    }
  }
};
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  padding: 20px 60px;
  font-size: 40px;
  font-weight: bolder;
}
p span {
  font-size: 50px;
  margin: 20px 0px;
}
ul {
  padding: 0;
  list-style: none;
}
button {
  margin-top: 30px;
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 20px;
}
button:hover {
  cursor: pointer;
}
</style>
