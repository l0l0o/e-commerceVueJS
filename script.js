import { cardComponent } from "./components/Card.js";

const { createApp, ref } = Vue;
const vm = createApp({
  components: {
    "card-component": cardComponent,
  },
  methods: {},
  data() {
    return {
      productList: [],
    };
  },
  mounted() {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        this.productList = data;
      });
  },
}).mount("#app");
