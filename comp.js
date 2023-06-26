Vue.component('product', {
    props: ['product'],
    template: `
      <div>
        <h3>{{ product.name }}</h3>
        <img :src="product.image" :alt="product.name" width="100%">
        <p>{{ product.text }}</p>
      </div>
    `
});