<template>
  <div>
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
      <modal :name="chosenPackage" width="50%" height="50%">
        <section id="form">
          <form @submit.prevent="confirmSubscription">
            <label>
              Your Name:
              <input type="text" v-model="yourName" />
            </label>
            <br />
            <label>
              Your Email:
              <input type="email" v-model="yourEmail" />
            </label>
            <br />
            <label>
              Chosen Package:
              <input type="text" disabled v-model="chosenPackage" />
            </label>
            <br />
            <p>{{ feedback }}</p>
            <button type="submit">Confirm</button>
            <br />
            <br />
            <button @click="$modal.hide(chosenPackage)" id="cancel">Cancel</button>
          </form>
        </section>
      </modal>
    </div>
  </div>
</template>

<script>
import { addSubscriber } from "../api/index";
export default {
  name: "price",
  props: ["id", "banner", "name", "price", "packages"],
  data() {
    return {
      chosenPackage: "",
      yourName: "",
      yourEmail: "",
      feedback: ""
    };
  },
  methods: {
    doSubscribe(id) {
      this.chosenPackage = this.getPackageName(id);
      this.$modal.show(this.chosenPackage);
    },

    getPackageName(id) {
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
    async confirmSubscription() {
      // var that = this;
      this.feedback = "Processing....";
      const res = await addSubscriber(
        this.yourName,
        this.yourEmail,
        this.chosenPackage
      );
      this.feedback = res.message;
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
button:not(#cancel) {
  margin-top: 30px;
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 20px;
}
button:hover {
  cursor: pointer;
}

#form {
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
.vm--modal {
  width: 100% !important;
  height: auto !important;
}
#cancel {
  background: red;
  opacity: 0.5;
  padding: 5px 10px;
}
</style>
