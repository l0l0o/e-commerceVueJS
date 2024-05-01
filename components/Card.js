export const cardComponent = {
  template: `<div class="card">
  <div class="price"><span>{{price}} €</span></div>
  <img
    :src="image_url"
    alt=""
  />
  <div class="button-container">
    <button class="left-button">
      <i v-if="like" class="fa-solid fa-heart"></i>
      <i v-if="!like" class="fa-regular fa-heart"></i>
    </button>
    <button class="right-button">
      <i class="fa-solid fa-cart-shopping"></i>
    </button>
  </div>
</div>`,
  props: {
    price: Number,
    image_url: String,
    like: Boolean,
  },
};
